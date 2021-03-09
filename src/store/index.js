import * as Vuex from 'vuex'

import homeModule from './home/index'

const store = Vuex.createStore({
    modules: {
        home: homeModule
    }
})

export default store