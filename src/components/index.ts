import SvgIcon from '@/components/SvgIcon/index.vue'

// 引入el-icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//全局对象
const allGloablComponent: any = { SvgIcon }
// 对外暴露插件对象
export default {
  install(app: any) {
    // 注册项目全部的全局组件
    Object.keys(allGloablComponent).forEach((key) => {
      app.component(key, allGloablComponent[key])
    })
    // 将elment-plus 提供的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
