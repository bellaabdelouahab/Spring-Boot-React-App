import axios from "axios";
import config from "./ConfigApi";
const getProducts=new Promise((resolve,reject)=>{
    axios.get(`${config.getApiPath()}/api/v1/app/product`,{headers: {
    'Content-Type': 'application/json',
    'mode': 'no-cors'},withCredentials:true}).then((data)=>{
        resolve(data.data)
    }).catch((e)=>{
        reject(e)
    })
})

const deleteProductById=(id)=>{
    return new Promise((resolve,reject)=>{
        axios.delete(`${config.getApiPath()}/api/v1/app/product/${id}`).then((res)=>{
            resolve(res.data)
        }).catch((e)=>{
            reject(e)
        })
    })
}
const addProduct=(productName,desc,type,ImageSrc)=>{
    return new Promise((resolve,reject)=>{
        axios.post('http://localhost:8081/api/v1/app/product',{"price": 3,
        "name":productName,
        "description":desc,
        "type":type,
        "imagesrc":ImageSrc}).then((res)=>{
            resolve(res.data)
        }).catch((e)=>{
            reject(e)
        })
    })
}
const productsApi={getProducts,deleteProductById,addProduct};

export default productsApi;