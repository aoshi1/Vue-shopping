//引入组件路由
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import OrderListPage from '@/pages/orderList'
import DetailAnaPage from '@/pages/detail/analysis'
import DetailCouPage from '@/pages/detail/count'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'

//引入Vue-router路由依赖
import {createRouter, createWebHashHistory} from "vue-router"

const routes= [
    {
        path: '/',
        name: 'index',
        component: IndexPage
    },
    {
        path: '/orderList',
        name: 'orderList',
        component: OrderListPage
    },
    {
        path: '/detail',
        component: DetailPage,
        redirect: '/detail/analysis',
        children: [
            {
                path: 'analysis',
                name: 'analysis',
                component: DetailAnaPage
            },
            {
                path: 'count',
                name: 'count',
                component: DetailCouPage
            },
            {
                path: 'forecast',
                name: 'forecast',
                component: DetailForPage
            },
            {
                path: 'publish',
                name: 'publish',
                component: DetailPubPage
            }
        ]
    }
    ]

//定义路由配置，注意export导出，只有导出了别的文件才能import导入
export const router = createRouter({
    //createWebHistory路由模式路径不带#号,createWebHashHistory路由模式路径带#号，而且默认是Hash
    history: createWebHashHistory(),
    routes: routes
})

export default router