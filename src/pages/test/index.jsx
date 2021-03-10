const Test = {

    methods: {
        getCount() {
            return this.$store.state.counter.count
        },
        increaseByMutation(num) {
            !num && this.$store.commit('counter/increase')
            num < 0 && this.$store.commit('counter/increase', num)
            num > 0 && this.$store.commit('counter/increase', num)
        },
        increaseByAction(num) {
            !num && this.$store.dispatch('counter/asyncIncrease')
            num < 0 && this.$store.dispatch('counter/asyncIncrease', num)
            num > 0 && this.$store.dispatch('counter/asyncIncrease', num)
        },
        goBack(num) {
            num && this.$router.go(-num);
            !num && this.$router.go(-1);
        }
    },

    render() {
        return (
            <>
                <div>
                    <p>
                        test page
                    </p>
                    <p>计算器：{this.getCount()}</p>
                    <button onClick={_=> this.increaseByMutation()}>+1 by mutation</button>
                    <button onClick={_=> this.increaseByMutation(-1)}>-1 by mutation</button>
                    <button onClick={_=> this.increaseByMutation(10)}>+10 by mutation</button>
                    <br></br>
                    <button onClick={_=> this.increaseByAction()}>+1 by action</button>
                    <button onClick={_=> this.increaseByAction(-1)}>-1 by action</button>
                    <button onClick={_=> this.increaseByAction(10)}>+10 by action</button>
                </div>
                <button onClick={_=> this.goBack()}>返回上一页</button>
            </>
        )
    }
}

export default Test