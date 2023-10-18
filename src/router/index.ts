import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes.ts'
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
})
export default router
