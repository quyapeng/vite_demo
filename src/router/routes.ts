export default [
    {
        path:'/',
        name:'home',
        component:() => import('@/views/home.vue'),
        children: [
            {
                path:'/mine/myInfo',
                name:'myInfo',
                component:()=>import('@/views/mine/myInfo.vue')
            }
        ]
    }
]