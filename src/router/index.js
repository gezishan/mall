import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home')
const Done = () => import('views/done/Done')
const Recruit = () => import('views/recruit/Recruit')
const Me = () => import('views/mine/Me')
const Detail = () => import('views/detail/Detail')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/done',
    component: Done,
    meta: {
      title: '进度'
    }
  },
  {
    path: '/recruit',
    component: Recruit,
    meta: {
      title: '招募'
    }
  },
  {
    path: '/me',
    component: Me,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/detail/:id',
    component: Detail,
    meta: {
      title: '详情'
    }
  }
]

const router = new Router({
  routes,
  base: process.env.BASE_URL,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router

