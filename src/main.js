//引入vue框架
import { createApp } from 'vue'
import App from './App.vue'
//引入路由
import Router from './router'
import mock from './mock/mock'

//自动创建vue
const app=createApp(App)
//使用router
app.use(Router)
//挂载到命为app的dom元素，其实就是index.html里面的叫app的元素
app.mount('#app')
//关闭生产模式下给出的提示
app.config.productionTip=false