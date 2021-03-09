import Test from '../components/Test/index.jsx'

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
        console.log('created 阶段')
    },

    mounted() {
        console.log('mounted 阶段');
    },
    
    render() {
        return (
            <div>
                <h1>{this.name}</h1>
                <Test value={this.counter}></Test>
                <button onClick={() => this.changeName()}>
                    明日香suki
                </button>
            </div>
        )
    }
}

export default Index