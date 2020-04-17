import {request, localRequest} from './request'

export function getHomeData(){
    return request({
        // method: 'get',
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page){
    return request({
        url: '/home/data',
        params: {
            type,
            page
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
