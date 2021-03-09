const Test = {
    data() {
        return {}
    },

    props: {
        value: {default: 0, type: Number || String}
    },

    computed: {
        calculatorValue() {
            return 'counter:' + this.value
        }
    },

    render() {
        return (
            <div>
                <p>test components: {this.calculatorValue}</p>
            </div>
        )
    }
}

export default Test