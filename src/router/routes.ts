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
    ],
  },
]
