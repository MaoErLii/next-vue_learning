import * as VueRouter from 'vue-router'
import Home from '../pages/home/index.jsx'
import Test from '../pages//test/index.jsx'

const NotFound = () => {
    return (
        <div>404</div>
    )
}

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/test', name: 'test', component: Test},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
    { path: '/:pathMatch(.*)', name: 'badNotFound', component: NotFound },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

router.resolve({
    name: 'NotFound',
    params: { pathMatch: ['not', 'found'] },
}).href // '/not/found'

export default router

