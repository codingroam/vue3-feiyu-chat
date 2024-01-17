import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
export const constantRoutes: RouteRecordRaw[] =  [
    {
        path:'/login',
        component: () => import("@/views/login/index.vue")

    },

]

/**
 * 创建路由
 */

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes as RouteRecordRaw[],
    
    scrollBehavior: ()=>({ left: 0, top: 0 })
})

/**
 * 重置路由
 */

export function resetRouter(){
    router.replace({path: "/"})
}
export default router;