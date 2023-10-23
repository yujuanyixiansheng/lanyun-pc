import { createApp, onMounted } from 'vue'
import ElementPlus from 'element-plus'
import '@/assets/styles/cyc.scss'
import 'element-plus/dist/index.css'

// svg需要配置的代码
import 'virtual:svg-icons-register'
//配置el_plus国际化
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //报错 ,方法就是加一行 "//@ts-ignore"
import App from './App.vue'
import router from './router'
import { pinia } from './store'

const app = createApp(App)
import gloablComponent from './components/index' //引入自定义的一些插件
app.use(gloablComponent) //安装使用插件
app.use(router).use(ElementPlus, { locale: zhCn }).use(pinia).mount('#app')
// 获取用户信息列表
import { userStore } from '@/store/modules/user'

let token = localStorage.getItem('token')
let useStore = userStore()
if (token) {
  useStore.userInfoRoutes()
}
