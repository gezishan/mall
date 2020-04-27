import {request, goodsMogujie, localRequest} from './request'

export function getHomeData(){
    return request({
        // method: 'get',
        url: '/home/multidata'
    })
}

export function getHomeGoods(sort, page){
    return goodsMogujie({
        url: '/api/search',
        params: {
            sort,
            page,
            // callback: 'jsonp1'
        }
    })
}

export function getLocalHomeGoods(type, page){
    return localRequest({
        url: '/goods',
        params: {
            type,
            page
        }
    })
}
