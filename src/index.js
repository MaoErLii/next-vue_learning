import * as Vue from 'vue'

import router from './router/index'
import store from './store/index'

import Index from './pages/index.jsx'

const app = Vue.createApp(Index);

app.use(router);
app.use(store);

app.mount('#app');