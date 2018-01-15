import HttpService from './HttpService'
import server from './../constant/constant'

export default class httpUtil {

    /* 
    *params httpApi 字符串，对应请求的接口路径
    *params data 对象，对应的请求参数对象
    * 该方法完成get请求的promise封装
     */
    static get(httpApi, data){
        return new Promise((reslove,reject) =>{
            HttpService.query({
                url: server + httpApi,
                data: data || {},
                success:res =>{
                    if(res.resultCode === 0 && res.resultEntity){
                        reslove(res.resultEntity)
                    }else{
                        reject(res)
                    }
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    }
    /* 
    *params httpApi 对应请求的接口路径
    *params data 对象，对应的请求参数对象
    *该方法完成post请求的promise封装
    */
    static post(httpApi, data) {
        return new Promise((reslove,reject) =>{
            HttpService.save({
                url: server + httpApi,
                data: data || {},
                success:res =>{
                    if(res.resultCode === 0 && res.resultEntity){
                        reslove(res.resultEntity)
                    }else{
                        reject(res)
                    }
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    }
}