import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const base = '/'; // 应用的基础请求路径

const router = createRouter({
    history: createWebHistory('/'), // history 模式使用HTML5模式
    routes
})

export default router;