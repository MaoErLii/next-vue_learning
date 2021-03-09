import { RouterView } from 'vue-router'
// import Test from '../components/Test/index.jsx'

const Index = {
    data() {
        return {
            name: '香香',
            counter: 0
        }
    },

    methods: {
        changeName() {
            let names = {'香香': 'asuka', asuka: '香香'}
            this.counter++
            this.name = names[this.name]
        }
    },
    

    created() {
        // console.log('created 阶段', this.$store.state.home.suki)
    },

    mounted() {
        // console.log('mounted 阶段', this);
    },

    updated() {
        // console.log('组件更新', this.name)
    },
    
    render() {
        return (
            <div>
                {/* <h1>{this.name}</h1>
                <Test value={this.counter}></Test>
                <button onClick={() => this.changeName()}>
                    明日香suki
                </button> */}
                <RouterView></RouterView>
            </div>
        )
    }
}

export default Index