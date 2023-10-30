//统一管理项目某模块相关接口,学校管理
import request from '@/utils/request'
import type { TeacherInter, studentInter, studentListForm, Organize } from './type'
// import type { TeacherInter, GradeInter } from './type'
import { API } from './type'
//统一管理接口
// 暴露请求函数
//学校管理 教师列表接口方法
export const reqTeacherList = () => {
  return request.get<any, TeacherInter>(API.TEACHER_URL)
}
//学校管理 年级管理列表接口方法  班级管理列表  两个接口暂时无效
// export const reqGradeList = () => {
//   request.post<any, string>(API.GRADE_URL, {
//     'baseURL': 'VITE_APP_BASEURL_SVC'
//   })
//   return request('', {
//     url: API.GRADE_URL
//   })
// }
// 获取年级班级信息(注意：必须先获取年级班级信息 再拿到学生列表)
export const reqOrganList = () => {
  return request.get<any, Organize>(API.ORGANIZE_STUDENT_URL)
}
//学生管理 在线学生列表  https://task.bluerhyme.net/sys/educationadmin/studentInfo/getStudentInfoList 在校学生
export const reqStudentInfo = (studentConditionDto: studentListForm) => {
  return request.post<any, studentInter>(API.ONLINE_STUDENT_URL, {
    ...studentConditionDto
  })
}

//学生管理 在线学生列表  https://task.bluerhyme.net/sys/educationadmin/studentInfo/getFormerStuentInfoList 往届学生
export const reqOutLine = ((data: studentListForm) => {
  return request.post<any, studentInter>(API.OUTLINE_STUDENT_URL, {
    ...data
  })
})
//档案管理
export const reqArchivesList = (data: studentListForm) => {
  return request.post<any, studentInter>(API.ARCHIVE_STUDENT_URL, {
    ...data
  })
}