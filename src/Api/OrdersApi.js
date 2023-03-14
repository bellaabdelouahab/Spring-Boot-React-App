import axios from "axios";
import config from "./ConfigApi";
const getDataOrders=new Promise((resolve,reject)=>{
    axios.get(`${config.getApiPath()}/api/v1/app/orders`,{headers: {
        'Content-Type': 'application/json',
        'mode': 'no-cors',
      },withCredentials:true}).then((data)=>{
        resolve(data.data);
      }).catch((e)=>{
        reject(e);
      })
})
const statusOrder=(order)=>{
  if(order.received){
    return "received";
  }
  else if(order.shipped){
    return "shipped";
  }
  else if(order.confirmed){
    return "confirmed";
  }
  return "pending"
}

const OrdersApi={getDataOrders,statusOrder}

export default OrdersApi;