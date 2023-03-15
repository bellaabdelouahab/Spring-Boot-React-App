import config from "./ConfigApi";
import axios from "axios";

const getStockData=new Promise((resolve,reject)=>{
    fetch(`${config.getApiPath()}/api/v1/app/stockop`)
      .then((res) => res.json())
      .then((data) => {
        resolve(data)
      }).catch((e)=>{
        reject(e)
      })
})

const addStockOp=(productId,quantity,label)=>{
    return new Promise((resolve,reject)=>{
      axios.post(`${config.getApiPath()}/api/v1/app/stockop`,{
        "productId":productId,"quantity":quantity,"label":label
      }).then((data)=>{
          resolve(data.data);
      }).catch((e)=>{
          reject(e)
      })
    })
}
const StockOp={
    getStockData,addStockOp
}
export default StockOp;