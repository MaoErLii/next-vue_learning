import { onMounted } from "vue"
import { RouterLink, useRouter } from "vue-router";
import { useStore } from 'vuex'

const Home = {
    setup() {
        const store =useStore();
        const router = useRouter();
        
        onMounted(() => {
        })

        function getName() {
            return store.state.home.name
        }

        function changeNameByMutation() {
            store.commit('home/hahaha', 'mutation入参')
        }

        function changeNameByAction() {
            store.dispatch('home/asyncHahaha', 'action入参')
        }

        function jumpToTest() {
            router.push('/test')
        }

        return () => (
            <>
                <div>
                    <p>home sweet home</p>
                    <p>{getName()}</p>
                    <button onClick={_ => changeNameByMutation()}>
                        changeNameByMutation
                    </button>
                    <button onClick={_ => changeNameByAction()}>
                        changeNameByAction
                    </button>
                </div>
                <div>
                    <p>路由</p>
                    <button onClick={_=>jumpToTest()}>到test页</button>
                    <br></br>
                    <RouterLink to="/test">
                        routerLink组件
                    </RouterLink>
                </div>
            </>
        )
    }
}


export default Home