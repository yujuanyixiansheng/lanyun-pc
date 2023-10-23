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
      {
        path: '/schoolHome',
        name: 'SchoolHome',
        component: () => import('@/pages/schoolHome.vue'),
        meta: {
          title: '首页',
          // hidden: false,
          // icon: 'HomeFilled',
        },
      },
      {
        path: '/psychology',
        component: () => import('@/pages/psychologyEvaluation/index.vue'),
        name: 'Psychology',
        meta: {
          title: '心理测评',
          icon: 'Message',
          hidden: false,
        },
        redirect: '/psychology/evaquery',
        children: [
          {
            path: '/psychology/evaquery',
            name: 'Evaquery',
            component: () =>
              import('@/pages/psychologyEvaluation/evaquery.vue'),
            meta: {
              title: '心理测评',
              hidden: false,
              icon: 'HomeFilled',
            },
          },
          {
            path: '/psychology/focus',
            name: 'focus',
            component: () => import('@/pages/psychologyEvaluation/focus.vue'),
            meta: {
              title: '心理访谈',
              hidden: false,
              icon: 'HomeFilled',
            },
          },
        ],
      },
    ],
  },
]

// // 任务管理
//     {
//       path: '/task',
//       children: [
//         {
//           path: '/task/historyTask',
//           component: () => import('@/pages/task/historyTask.vue'),
//           name:'historyTask',
//           meta: {
//             hidden: false,
//               title: '历史任务',
//               icon: 'Lock',
//               },
//         },
//         {
//           path: '/task/psychologyTask',
//           component: () => import('@/pages/task/psychologyTask.vue'),
//           name:'psychologyTask',
//           meta: {
//             hidden: false,
//               title: '任务管理',
//               icon: 'Lock',
//               },
//         },
//       ],
//     },
//     //心理测评
//     {
//       path: '/psychologyEvaluation',
//       children: [
//         {
//           path: '/psychologyEvaluation/evaquery',
//           component: () => import('@/pages/psychologyEvaluation/evaquery.vue'),
//           name:'evaquery',
//           meta: {
//             hidden: false,
//               title: '测评学生选择',
//               icon: 'Lock',
//               },
//         },
//         {
//           path: '/psychologyEvaluation/focus',
//           component: () => import('@/pages/psychologyEvaluation/focus.vue'),
//           meta: {
//             hidden: false,
//               title: '告警学生',
//               icon: 'Lock',
//               }
//         },
//         {
//           path: '/psychologyEvaluation/record',
//           component: () => import('@/pages/psychologyEvaluation/record.vue'),
//           meta: {
//             hidden: false,
//               title: '测评查询',
//               icon: 'Lock',
//               },
//         },
//         {
//           path: '/psychologyEvaluation/scale',
//           component: () => import('@/pages/psychologyEvaluation/scale.vue'),
//           meta: {
//             hidden: false,
//               title: '量表管理',
//               icon: 'Lock',
//               },
//         },
//         {
//           path: '/psychologyEvaluation/signature',
//           component: () => import('@/pages/psychologyEvaluation/signature.vue'),
//           meta: {
//             hidden: false,
//               title: '家长签名记录',
//               icon: 'Lock',
//               },
//         },
//         {
//           path: '/psychologyEvaluation/warning',
//           component: () => import('@/pages/psychologyEvaluation/warning.vue'),
//           meta: {
//             hidden: false,
//               title: '测评告警',
//               icon: 'Lock',
//               },
//         },
//       ],
//     }

//   {
//     path: '/Interview',
//     component:()=>import('@/')
//     children: [
//       { path: 'again', component: () => import('@/pages/Interview/Again.vue') },
//       {
//         path: 'coachStudent',
//         component: () => import('@/pages/Interview/CoachStudent.vue'),
//       },
//       {
//         path: 'searchquestionnaire',
//         component: () => import('@/pages/Interview/Searchquestionnaire.vue'),
//       },
//     ],
//   },
// ]
