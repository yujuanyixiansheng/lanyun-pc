import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/styles/cyc.scss'

// svg需要配置的代码
import 'virtual:svg-icons-register'
//配置el_plus国际化
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //报错 ,方法就是加一行 "//@ts-ignore"
import App from './App.vue'
import router from './router'
const app = createApp(App)
import SvgIcon from '@/components/SvgIcon/index.vue'
app.component('SvgIcon', SvgIcon)
app.use(router).use(ElementPlus, { locale: zhCn }).mount('#app')
