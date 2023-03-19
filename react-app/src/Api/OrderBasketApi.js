import axios from "axios";
import config from "./ConfigApi";
import { useState } from "react";

const getOrderBasketByOrderNumber=(id)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`${config.getApiPath()}/api/v1/app/orderBasket/orderNumber/${id}`).then((res)=>{
            resolve(res.data)
        }).catch((e)=>{
            reject(e)
        })
    });
}
const getAllOrderBasketData=()=>{
    return new Promise((resolve,reject)=>{
        axios.get(`${config.getApiPath()}/api/v1/app/orderBasket`).then((res)=>{
            resolve(res.data)
        }).catch((e)=>{
            reject(e)
        })
    });
}
const AddBasket=(orderId,productId,priceperunit,quantity)=>{
    return new Promise((resolve,reject)=>{
        axios.post(`${config.getApiPath()}/api/v1/app/orderBasket`,{
            "orderId":orderId,
            "productId":productId,
            "priceperunit":priceperunit,
            "quantity":quantity
        }).then((res)=>{
            resolve(res.data)
        }).catch((e)=>{
            reject(e)
        })
    })
}


const OrderBasketApi={getOrderBasketByOrderNumber,getAllOrderBasketData,AddBasket}

export default OrderBasketApi;