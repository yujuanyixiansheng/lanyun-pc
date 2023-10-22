//统一管理项目某模块相关接口,比如user
import request from '@/utils/request'
import type { loginForm, loginResponseData, userResponseData } from './type'
import { API } from './type'
//统一管理接口
// 暴露请求函数
//登录接口方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, {
    ...data,
  })
//获取用户信息接口
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USER_URL)
