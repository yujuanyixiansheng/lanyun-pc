//登录接口需要携带参数ts类型
export interface loginForm {
  username: string
  password: string
}
interface DataType {
  token: string
}
//登录接口返回的数据类型
export interface loginResponseData {
  code: number
  // serviceName: string
  data: DataType
}
interface User {
  username: string
  password: string
  // roles: string[]
}
//定义服务器返回用户信息相关的数据类型
export interface userResponseData {
  code: number
  data: User
}
