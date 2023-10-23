//小仓库 关于layout组件相关配置
import { defineStore } from 'pinia'
let useLayoutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, //用户控制菜单折叠/收起
    }
  },
})
export default useLayoutSettingStore
