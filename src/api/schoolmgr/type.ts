//学校管理 接口需要携带参数 ts类型

// enum 是枚举
export enum API {
  TEACHER_URL = '/educationadmin/teacherInfo/findTeacherInfo',
}
interface TeacherArr {
  list: Array<object>
  navigateFirstPage: number
  navigateLastPage: number
  navigatePages: number
  navigatepageNums: Array<number>
  nextPage: number
  pageNum: number
  pageSize: number
  pages: number
  prePage: number
  size: number
  startRow: number
  total: number
}
export interface TeacherInter {
  data: TeacherArr
  code: number
}
