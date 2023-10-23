//登录接口需要携带参数ts类型

// enum 是枚举
export enum API {
  LOGIN_URL = '/educationadmin/userLogin',
  USER_URL = '/educationadmin/getUserInfo',
  SCHOOL_HOME_URL = '/educationadmin/statistics/countStudent', //首页卡片列表数据路径
}
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
  data: DataType
}
interface UserType {
  canDelete: number
  displayName: string
  lastLoginTime: string
  loginName: string
  organizationId: number
  password: null
  permission: string
  remark: string
  roleId: number
  userId: number
}
interface User {
  consultant: boolean
  cregister: null
  currentOrganizationId: number
  currentOrganizationName: string
  currentRoleGroup: number
  educationOrganizationId: number
  expireTime: string
  loginTime: string
  ordinary: boolean
  organizationName: string
  permissions: []
  userInfo: any
}

//定义服务器返回用户信息相关的数据类型
export interface userResponseData {
  code: number
  data: User
}
interface Card {
  studentTotal: number
  schoolTotal: number
  keyStudentTotal: number
  studentEvaluateTimes: number
  studentCounselingTimes: number
  studentTrainTimes: number
  secondInterviewNum: number
}
export interface cardResponseData {
  code: number
  data: Card
}
