import { createRouter, createWebHashHistory, } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout, getParentLayout } from '../utils/routerHelper'
import { NO_RESET_WHITE_LIST } from '../constants'
export const constantRouterMap: AppRouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard/analysis',
        name: 'Root',
        meta: {
            hidden: true
        }
    },
    {
        path: '/redirect',
        component: Layout,
        name: 'RedirectWrap',
        children: [
            {
                path: '/redirect/:path(.*)',
                name: 'Redirect',
                component: () => import('../views/Redirect/Redirect.vue'),
                meta: {}
            }
        ],
        meta: {
            hidden: true,
            noTagsView: true
        }
    },
    {
        path: '/login',
        component: () => import('../views/Login/Login.vue'),
        name: 'Login',
        meta: {
            hidden: true,
            title: '登入',
            noTagsView: true
        }
    },
    {
        path: '/components',
        component: Layout,
        name: 'ComponentsDemo',
        meta: {
            title: 'Component',
            icon: 'vi-bx:bxs-component',
            alwaysShow: true
        },
        children: [
            {
                path: 'form',
                component: getParentLayout(),
                redirect: '/components/form/default-form',
                name: 'Form',
                meta: {
                    title: 'Form',
                    alwaysShow: true
                },
                children: [
                    {
                        path: 'default-form',
                        component: () => import('../views/Components/Form/DefaultForm.vue'),
                        name: 'DefaultForm',
                        meta: {
                        title: 'DefaultForm'
                        }
                    },
                ]
            }
        ],
    }
    ,
  {
    path: '/404',
    component: () => import('../views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]
export const asyncRouterMap: AppRouteRecordRaw[] = [
    {
        path: '/dashboard',
        component: Layout,
        redirect: '/dashboard/analysis',
        name: 'Dashboard',
        meta: {
            title: '後台首頁',
            icon: 'vi-ant-design:dashboard-filled',
            alwaysShow: true
        },
        children: [
            {
                path: 'analysis',
                component: () => import('../views/Dashboard/Analysis.vue'),
                name: 'Analysis',
                meta: {
                title:'Analysis',
                noCache: true,
                affix: true
                }
            },
        ]
    }
]
const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !NO_RESET_WHITE_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router