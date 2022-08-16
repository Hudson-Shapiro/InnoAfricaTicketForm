import { createRouter, createWebHashHistory } from 'vue-router'
import TicketComplete from '../views/TicketComplete.vue'
import VueForm from '../views/VueForm.vue'

const routes = [
  {
    path: '/',
    name: 'VueForm',
    component: VueForm
  },
  {
    path: '/TicketComplete',
    name: 'TicketComplete',
    component: TicketComplete
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
