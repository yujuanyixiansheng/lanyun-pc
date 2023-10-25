//统一管理项目某模块相关接口,学校管理
import request from '@/utils/request'
import type { TeacherInter } from './type'
import { API } from './type'
//统一管理接口
// 暴露请求函数
//学校管理 教师列表接口方法
export const reqTeacherList = () => {
  return request.get<any, TeacherInter>(API.TEACHER_URL)
}
