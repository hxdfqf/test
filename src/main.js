import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { request } from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})



// //1.基本使用
// axios({
//   url: 'http://152.136.185.210:8000/api/w6/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://152.136.185.210:8000/api/w6/home/data?type=sell&page=3',
//   //专门针对get请求的参数拼接
//   params: {
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res)
// })


// //2.axios发送并发的请求(就是多个请求，就是用数组)
// axios.all([axios({
//   url: 'http://152.136.185.210:8000/api/w6/home/multidata',
// }),axios({
//   url: 'http://152.136.185.210:8000/api/w6/home/data',
//   params: {
//     type:'sell',
//     page: 5
//   }
// })])
// .then(result => {
//   console.log(result)
//   console.log(result[0])
//   console.log(result[1])
// })


// //3.使用全局的axios和相对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://152.136.185.210:8000'
// //限制请求时间
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url: '/api/w6/home/multidata',
// }),axios({
//   url: '/api/w6/home/data',
//   params: {
//     type:'sell',
//     page: 5
//   }
// })])
// .then(axios.spread((res1,res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

// //4.创建我们对应的axios的实例
//    //每一个实例都有属于自己的配置。就是baseURL
// const instance1 = axios.create({
//   baseURL:'http://152.136.185.210:8000',
//   timeout: 1000
// })

// instance1({
//   url:'/api/w6/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// instance1({
//   url: '/api/w6/home/data',
//     params: {
//       type:'pop',
//       page: 1
//     }
// })


// //5.封装一个request模块
// import {request} from './network/request.js'

// request({
//   url:'/api/w6/home/multidata'
// },res => {
//   console.log(res)
// },err => {
//   console.log(err)
// })

// request({
//   baseConfig: {

//   },
//   success: function(res) {

//   },
//   failure: function(err){

//   }
// })


request({
  url: '/api/w6/home/multidata'
}).then(res => {
  //console.log(res)
}).catch(err => {
  //console.log(err)
})
