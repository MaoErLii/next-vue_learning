import { onMounted } from "vue"
import { useStore } from 'vuex'

const Home = {
    setup() {
        const store =useStore();
        
        onMounted(() => {
            console.log(store)
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

        return () => (
            <div>
                <p>home sweet home</p>
                <p>{getName()}</p>
                <button onClick={() => {changeNameByMutation()}}>
                    changeNameByMutation
                </button>
                <button onClick={() => {changeNameByAction()}}>
                    changeNameByAction
                </button>
            </div>
        )
    }
}


export default Home