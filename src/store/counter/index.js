export default {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        increase: (state, payload) => {
            if(payload) state.count += payload
            !payload && state.count++
        }
    },
    actions: {
        asyncIncrease: (store, payload) => {
            payload && store.commit('increase', payload)
            !payload && store.commit('increase')
        }
    }
}
