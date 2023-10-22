//进行axios二次封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { userStore } from '@/store/modules/user'
//1.create创建axios实例  配置基准路径和超时时间的地方
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL_SYS, //基础路径上会携带 /api
  timeout: 5000,
})
//2.给实例添加请求拦截
request.interceptors.request.use((config) => {
  // config.baseURL = import.meta.env[config.data.name]
  // config.data?.name && delete config.data.name
  // console.log(config)

  //获取用户相关的小仓库，获取token，登录成功以后携带个i服务器
  const store = userStore()
  if (store.token) {
    config.headers.Authorization = store.token
  }
  //config配置对象，headers请求头，经常给服务器端携带公共参数
  //返回配置对象
  return config
})
//3.响应拦截
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    //失败回调,处理http网络错误
    let message = '请求报错!'
    // let status = error.response.status
    // // let status = error.response.status
    // switch (status) {
    //   case '401':
    //     message = 'TOKEN过期'
    //     break
    //   case '403':
    //     message = '无权访问'
    //     break
    //   case '404':
    //     message = '请求地址错误'
    //     break
    //   case '500':
    //     message = '服务器出现错误'
    //     break
    //   default:
    //     message = '网络出现问题'
    //     break
    // }
    //提示错误信息
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  }
)
//4.暴露request
export default request
