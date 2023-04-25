import request from "./request";

import mockRequest from "./mockRequest";

export const reqCategoryList = ()=>{
    return request({url:'/product/getBaseCategoryList',method: 'get'})
}

export const reqBannerList = ()=>mockRequest.get('/banner');