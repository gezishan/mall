import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instance.interceptors.request.use(res => {
        // console.log(res)
        return res
    },err => {
        // console.log(err)
    })

    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    },err => {
        // console.log(err)
    })

    return instance(config)
}

export function goodsMogujie(config){
    const instance = axios.create({
        // baseURL: 'https://list.mogu.com/',
        // baseURL: 'http://localhost:8080',
        timeout: 5000,
        // headers: {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    })

    instance.interceptors.request.use(res => {
        // console.log(res)
        return res
    },err => {
        // console.log(err)
    })

    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    },err => {
        // console.log(err)
    })

    return instance(config)
}

export function localRequest(config){
    const instance = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 5000
    })

    instance.interceptors.request.use(res => {
        // console.log(res)
        return res
    },err => {
        // console.log(err)
    })

    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    },err => {
        // console.log(err)
    })

    return instance(config)
}


export function requestMogujie(config){
    const instance = axios.create({
        baseURL: 'https://api.mogu.com/h5/http.detail.api',
        timeout: 5000,
        headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
    })

    instance.interceptors.request.use(res => {
        // console.log(res)
        return res
    },err => {
        // console.log(err)
    })

    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    },err => {
        // console.log(err)
    })

    return instance(config)
}