export default [
    {
        path:'/home',
        name:'Home',
        component:() => import('@/views/home.vue'),
        children: [
            {
                path:'/mine/myInfo',
                name:'MyInfo',
                component:()=>import('@/views/mine/myInfo.vue')
            }
        ]
    }
]