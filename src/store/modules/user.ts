import { defineStore } from 'pinia'
import {} from '@/api/user/index'
import { reqUserInfo, reqLogin } from '@/api/user'
import { loginForm } from '@/api/user/type'
export let userStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('token'),
    }
  },
  //异步/逻辑处理的地方
  actions: {
    //用户登录 方法
    async userLogin(data: loginForm) {
      const res: any = await reqLogin(data)
      console.log(res, 'store中的ACYION')

      if (res.code == 200) {
        // this.token = res.data.token
        // localStorage.setItem('Token', res.data.token)
        return 'OK'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
  },
  getters: {},
})
