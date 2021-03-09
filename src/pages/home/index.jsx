import { onMounted } from "vue"

const Home = {
    created() {
        console.log(this.$store.state.home.name)
    },
    setup() {
        onMounted(() => {
            console.log('test')
        })
        return () => (
            <div>
                <p>home sweet home</p>
            </div>
        )
    }
}


export default Home