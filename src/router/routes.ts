//对外暴露配置路由
import { RouteRecordRaw } from 'vue-router'
export const constantRoute: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/pages/login.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: false,
    },
  },
  {
    path: '/',
    component: () => import('@/pages/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'layout',
      hidden: false, //代表标题在菜单中是否隐藏 true:隐藏,false:不隐藏
      // icon: 'Avatar',
    },
    // 重定向首页
    redirect: '/schoolHome',
    children: [
      //首页
      {
        path: '/schoolHome',
        name: 'SchoolHome',
        component: () => import('@/pages/SchoolHome.vue'),
        meta: {
          title: '首页',
        },
      },
      //学校管理
      {
        path: '/schoolmgr',
        name: 'Schoolmgr',
        component: () => import('@/pages/Schoolmgr/index.vue'),
        meta: {
          title: '学校管理',
        },
        children: [
          {
            path: '/schoolmgr/teacher',
            name: 'Teacher',
            component: () => import('@/pages/Schoolmgr/teacher.vue'),
            meta: {
              title: '教师管理',
            },
          },
          {
            path: '/schoolmgr/grade',
            name: 'Grade',
            component: () => import('@/pages/Schoolmgr/grade.vue'),
            meta: {
              title: '年级管理',
            },
          },
          {
            path: '/schoolmgr/major',
            name: 'Major',
            component: () => import('@/pages/Schoolmgr/major.vue'),
            meta: {
              title: '专业管理',
            },
          },
          {
            path: '/schoolmgr/class',
            name: 'Class',
            component: () => import('@/pages/Schoolmgr/class.vue'),
            meta: {
              title: '班级管理',
            },
          },
          {
            path: '/schoolmgr/student',
            name: 'Student',
            component: () => import('@/pages/Schoolmgr/student.vue'),
            meta: {
              title: '学生管理',
            },
          },
          {
            path: '/sysmgr/archives',
            name: 'Archives',
            component: () => import('@/pages/Schoolmgr/archives.vue'),
            meta: {
              title: '档案管理',
            },
          },
        ],
      },
      // 任务管理
      {
        path: '/task/',
        name: 'task',
        // component: () => import('@/pages/Task/index.vue'),
        meta: {
          title: '任务管理',
        },
        children: [
          {
            path: '/task/psychologyTask',
            name: 'psychologyTask',
            component: () => import('@/pages/Task/PsychologyTask.vue'),
            meta: {
              title: '任务管理',
            },
          },
          {
            path: '/task/historyTask',
            name: 'historyTask',
            component: () => import('@/pages/Task/HistoryTask.vue'),
            meta: {
              title: '历史任务',
            }
          }
        ]
      },
      //"教师心理健康"
      {
        path: '/task/teacherMental',
        name: 'teacherMental',
        // component: () => import('@/pages/TeacherTask/index.vue'),
        meta: {
          title: '教师心理健康',
        },
        children: [
          {
            path: '/task/teacherTask',
            name: 'teacherTask',
            component: () => import('@/pages/TeacherTask/Task/index.vue'),
            meta: {
              title: '任务管理',
            },
            children: [
              {
                path: '/task/teacherTask',
                name: 'teacherTaskList',
                component: () => import('@/pages/TeacherTask/Task/TeacherTask.vue'),
                meta: {
                  title: '任务管理',
                },
              },
              {
                path: '/task/teacherHistoryTask',
                name: 'teacherHistoryTask',
                component: () => import('@/pages/TeacherTask/Task/TeacherHistoryTask.vue'),
                meta: {
                  title: '历史任务',
                }
              }
            ]
          }
        ]
      },
    ]
  }
]