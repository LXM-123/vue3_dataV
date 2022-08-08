import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import DataVVue3 from '@kjgl77/datav-vue3'

const app = createApp(App)
app.use(router).use(store).use(DataVVue3).mount('#app')
