import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Carousel from '../pages/carousel-index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel
    }
  ]
})
