export default {
    state: {
        name: '香香',
        suki: {
            asuka: '香香',
            '香香': 'asuka'
        }
    },
    mutations: {
        hahaha (state, payload) {
            console.log('mutation', payload);
            state.name = state.suki[state.name]
        }
    },
    actions: {
        asyncHahaha ({commit}, payload) {
            console.log('action', payload);
            commit('hahaha')
        }
    }
}