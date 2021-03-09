import axios from 'axios';
export const http = axios.create({
    baseUrl:'',
    timeout: 10000,
    header: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true// 设置cookie，跨域问题解决
});
// 请求拦截器

axios.interceptors.request.use(
    config => {
        const options = {
            ...config,
        };
        return options;
    },
    err => {
        return Promise.reject(err);
    },
);

// 响应拦截器
axios.interceptors.response.use(
    res => {
        // console.log('interceptors', res.data.code);
        if (res.data.code === 200 || res.status === 200) {
            return Promise.resolve(res);
        } else if (res.data.code === 500) {
            console.log('500');
        } else if (res.data.code === 404) {
            console.log('404');
        } else {
            console.log('?');
        }
    },
    err => {
        console.log(err);
        if (err.message == 'Network Error' || err.message == 'timeout of 20000ms exceeded') {
            // return Promise.reject(err);
            let arr = '';
            if (err.config.url && err.config.url.indexOf('comment') > -1 && err.config.method == 'post') {
                arr = '发送失败，';
            }
            Toast(arr + '请检查网络状态后重试', 2000);
            // Indicator.open('请检查网络状态后重试');
            return;
        }
        return Promise.reject(err);
    },
);
export default {
    http,
    install(app){
        app.config.globalProperties.$htpp = http
    }
}