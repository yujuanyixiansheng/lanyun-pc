import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/pages/SchoolHome.vue') },
  {
    path: '/task',
    // component: () => import('@/Pages/TaskManage.vue'),
    children: [
      {
        path: 'historyTask',
        component: () => import('@/pages/Task/HistoryTask.vue'),
      },
      {
        path: 'psychologyTask',
        component: () => import('@/pages/Task/psychologyTask.vue'),
      },
    ],
  },
  {
    path: '/Interview',
    children: [
      { path: 'again', component: () => import('@/pages/Interview/Again.vue') },
      {
        path: 'coachStudent',
        component: () => import('@/pages/Interview/CoachStudent.vue'),
      },
      {
        path: 'searchquestionnaire',
        component: () => import('@/pages/Interview/Searchquestionnaire.vue'),
      },
    ],
  },
  {
    path: '/psychologyEvaluation',
    children: [
      {
        path: 'evaquery',
        component: () => import('@/pages/psychologyEvaluation/Evaquery.vue'),
      },
      {
        path: 'focus',
        component: () => import('@/pages/psychologyEvaluation/Focus.vue'),
      },
      {
        path: 'record',
        component: () => import('@/pages/psychologyEvaluation/Record.vue'),
      },
      {
        path: 'scale',
        component: () => import('@/pages/psychologyEvaluation/Scale.vue'),
      },
      {
        path: 'signature',
        component: () => import('@/pages/psychologyEvaluation/Signature.vue'),
      },
      {
        path: 'warning',
        component: () => import('@/pages/psychologyEvaluation/Warning.vue'),
      },
    ],
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
