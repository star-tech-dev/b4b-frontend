import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import StrategiesView from '../views/strategies/StrategiesView.vue'
import StrategyView from '../views/strategies/StrategyView.vue'
import CardsView from '../views/cards/CardsView.vue'
import CardView from '../views/cards/CardView.vue'
import WeaponsView from '../views/weapons/WeaponsView.vue'
import CleanersView from '../views/cleaners/CleanersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    /**
     * Global
     */
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },

    /**
     * Strategies
     */
    {
      path: '/strategies',
      name: 'strategies',
      component: StrategiesView
    },
    {
      path: '/strategies/add',
      name: 'strategies.add',
      component: () => import('@/views/strategies/AddStrategyView.vue')
    },
    {
      path: '/strategies/:id',
      name: 'strategies.strategy',
      component: StrategyView
    },

    /**
     * Cards
     */
    {
      path: '/cards',
      name: 'cards',
      component: CardsView
    },
    {
      path: '/cards/:alias',
      name: 'cards.card',
      component: CardView
    },

    /**
     * Weapon
     */
    {
      path: '/weapon',
      name: 'weapons',
      component: WeaponsView
    },

    /**
     * Cleaners
     */
    {
      path: '/cleaners',
      name: 'cleaners',
      component: CleanersView
    },

    /**
     * Not found
     */
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/NotFoundView.vue'),
      meta: {
        layout: 'simple'
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  // if (!store.state.auth.user) {
  //   const { user } = await store.dispatch('auth/check').catch(() => ({ user: null }))
  //   await store.dispatch('auth/setUser', user)
  // }
  next()
})

export default router
