//学校管理 接口需要携带参数 ts类型

// enum 是枚举
export enum API {
  TEACHER_URL = '/educationadmin/teacherInfo/findTeacherInfo',
  // GRADE_URL = '/SchoolMgrBiz.GetGradeList'  //https://www.lanyunxinli.cn/JsonSvc/SchoolMgrBiz.GetGradeList
  ONLINE_STUDENT_URL = '/educationadmin/studentInfo/getStudentInfoList',
  ORGANIZE_STUDENT_URL = '/educationadmin/organization/getOrganizationList'
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
// export interface GradeInter {
//   data: Array<string>
// }
interface studentArr {
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  list: {}[]
  navigateFirstPage: number
  navigateLastPage: number
  navigatePages: number
  navigatepageNums: number[]
  nextPage: number
  pageNum: number
  pageSize: number
  pages: number
  prePage: number
  size: number
  startRow: number
  total: number
}
export interface studentListForm {
  beginTime: string
  classIdsList: number[]
  commissionIdsList: number[]
  departmentIdsList: number[]
  educationIdsList: number[]
  endTime: string,
  fileName: string,
  gradeIdsList: string[],
  keyword: string
  majorIdsList: string[],
  pageNum: number
  pageSize: number
  schoolIdsList: number[]
  sex: number
  status: number
}
export interface studentInter {
  code: number
  deta: studentArr
}
interface OrganDetail {
  classList: number[]
  commissionList: null
  departmentList: null
  educationList: null
  gradeList: string[]
  majorList: []
  schoolList: null
}
export interface Organize {
  code: number
  data: OrganDetail
}