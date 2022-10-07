import { createRouter, createWebHistory } from 'vue-router'
import PrincipalPage from '../views/PrincipalPage.vue'
import RestaurantsView from '../views/RestaurantsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: PrincipalPage
  },
  {
    path: '/Restaurantes',
    name: 'Restaurantes',
    component: RestaurantsView
  },
  {
    path: '/ComidasRapidas',
    name: 'ComidasRapidas',
    component: RestaurantsView
  },
  {
    path: '/Supermercados',
    name: 'Supermercados',
    component: RestaurantsView
  },
  {
    path: '/Carnes',
    name: 'Carnes',
    component: RestaurantsView
  },
  {
    path: '/Verduras',
    name: 'Verduras',
    component: RestaurantsView
  },
  {
    path: '/Panaderias',
    name: 'Panaderias',
    component: RestaurantsView
  },
  {
    path: '/Farmacias',
    name: 'Farmacias',
    component: RestaurantsView
  },
  {
    path: '/Licores',
    name: 'Licores',
    component: RestaurantsView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
