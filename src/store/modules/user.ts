import { defineStore } from 'pinia'
import {} from '@/api/user/index'
import { reqUserInfo, reqLogin } from '@/api/user'
import { loginForm } from '@/api/user/type'
import { UserState } from './types/types'
// 引入常量路由
import { constantRoute } from '@/router/routes'
// import { computed } from 'vue'
export let userStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: localStorage.getItem('token'),
      // isLogin: false,
      userInfo: {},
      menuRoutes: [], //仓库存储生成菜单需要的数组路由
      // menuRoutes: constantRoute, //仓库存储生成菜单需要的数组路由
    }
  },
  //异步/逻辑处理的地方
  actions: {
    //用户登录 方法
    async userLogin(data: loginForm) {
      const res: any = await reqLogin(data)

      if (res.code == 200) {
        this.token = res.data.token
        localStorage.setItem('token', res.data.token)
        return 'OK'
      } else {
        return Promise.reject(new Error(res.msg))
      }
    },
    // 用户退出
    logout() {
      this.token = ''
      localStorage.setItem('token', '')
    },
    //获取用户信息方法
    async userInfoRoutes() {
      //获取用户信息进行存储
      let result = await reqUserInfo()
      if (result.code == 200) {
        this.userInfo = result.data.userInfo
        this.menuRoutes.push(...result.data.permissions)
        return this.menuRoutes
      }
    },
  },
  getters: {},
})
