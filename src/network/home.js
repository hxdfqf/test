import {request} from './request.js'

export function getHomeMultiData() {
  return request({
    //url:'/test/getBanners'
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

// export function getGoodsData(type, page) {
//   return request({
//     url:'/test/getGoods',
//     params:{
//       type,
//       page
//     }
//   });
// }