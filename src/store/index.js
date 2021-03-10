import * as Vuex from 'vuex'

import homeModule from './home/index'
import counterModule from './counter/index'

const store = Vuex.createStore({
    modules: {
        home: homeModule,
        counter: counterModule
    }
})

export default store