import { createRouter, createWebHistory } from 'vue-router'
import PrincipalPage from '../views/PrincipalPage.vue'
import RestaurantsView from '../views/RestaurantsView.vue'
import FastFoodView from '../views/FastFoodView.vue'
import SuperMarketsView from '../views/SuperMarketsView.vue'
import MeatsView from '../views/MeatsView.vue'
import VegetablesView from '../views/VegetablesView.vue'
import BakeriesView from '../views/BakeriesView.vue'
import FarmacyView from '../views/FarmacyView.vue'
import LiqueursView from '../views/LiqueursView.vue'



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
    component: FastFoodView
  },
  {
    path: '/Supermercados',
    name: 'Supermercados',
    component: SuperMarketsView
  },
  {
    path: '/Carnes',
    name: 'Carnes',
    component: MeatsView
  },
  {
    path: '/Verduras',
    name: 'Verduras',
    component: VegetablesView
  },
  {
    path: '/Panaderias',
    name: 'Panaderias',
    component: BakeriesView
  },
  {
    path: '/Farmacias',
    name: 'Farmacias',
    component: FarmacyView
  },
  {
    path: '/Licores',
    name: 'Licores',
    component: LiqueursView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
