import * as VueRouter from 'vue-router'
import Home from '../pages/home/index.jsx'
import Test from '../pages//test/index.jsx'

const NotFound = {
    render() {
        return (
            <div>404</div>
        )
    }
}

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/test', name: 'test', component: Test},
    // {path: '/:w+', name: 'NotFound', component: NotFound},
    // {path: '/:w/:w', name: 'NotFound', component: NotFound},
    {path: '/:pathMatch(.*)*', name: 'badNotFound', component: NotFound },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(), // history
    // history: VueRouter.createWebHashHistory(), // hash
    routes
})

export default router

