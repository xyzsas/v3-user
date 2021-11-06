import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('./views/Login.vue')
  }/*,
  {
    path: '/activation',
    component: () => import('./views/Activation.vue')
  }*/,
  {
    path: '/',
    component: () => import('./views/Home.vue')
  }
]

const router = createRouter({ history: createWebHashHistory(), routes }) 

router.afterEach(() => {
  Swal.close()
})

export default router
