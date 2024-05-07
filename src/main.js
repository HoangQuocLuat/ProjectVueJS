import './css/index.css'

import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router"
import App from './App.vue'

//antdesign
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css'

//import component
import Tables from "./components/Tablet.vue"

const routes = [
    {path:"/", component: Tables}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App)
app.use(Antd)
app.use(router)
app.mount("#app")
