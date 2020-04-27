import {requestMogujie} from './request'


export function getItemDetail(iid){
    return requestMogujie({
        url: '/1/',
        params: {
            data: {
                "appPlat":"m",
                "sourceParams":"",
                "template":"1-2-detail_normal-1.0.0",
                "activityId":"",
                iid
            }
        }
    })
}

