import axios from 'axios'



export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000',
        timeout: 1000,
    })
    //2.axios的拦截器
       //拦截请求
       instance.interceptors.request.use(config => {
        console.log(config)
        //1.比如config中的一些信息不符合服务器的要求
        //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        //3.某些网络请求（比如（登录token），必须携带一些特殊的信息
        return config
    },err => {
        console.log(err)
    })
      //拦截响应
    instance.interceptors.response.use(res => {
        console.log(res)
        return res.data
    },err => {
        console.log(err)
    })

    //3.发送真正的网络请求
    return instance(config)
   
}





// export function request(config) {
//    return new Promise((resolve,reject) => {
//         //1.创建axios实例
//     const instance = axios.create({
//         baseURL:'http://152.136.185.210:8000',
//         timeout: 1000
//     })

//     instance(config)
//     .then(res => {
//         resolve(res)
//     })
//     .catch(err =>{
//        reject(err)
//     })
//    })
// }

// export function request(config) {
//     const instance = axios.create({
//         baseURL: 'http://152.136.185.210:8000',
//         timeout: 1000
//     })
//     instance(config.baseConfig)
//     .then(res => {
//         config.success(res)
//     }).catch(err => {
//         config.failure(err)
//     })
// }