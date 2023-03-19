import axios from "axios";
import config from "./ConfigApi";

const getCustomers=new Promise((resolve,reject)=>{
    fetch(`${config.getApiPath()}/api/v1/app/customer`)
        .then((res) => res.json())
        .then((data) => {
            resolve(data)
        }).catch((e)=>{
            reject(e);
        })
})
const AddCustomer=(firstName,lastName,address,city,postalCode,phoneNumber)=>{
    return new Promise((resolve,reject)=>{
        axios.post(`${config.getApiPath()}/api/v1/app/customer`,{
            "firstName":firstName,
            "lastName":lastName,
            "address":address,
            "city":city,
            "postalcode":postalCode,
            "phoneNumber":phoneNumber
        }).then((res)=>{
            resolve(res.data);
        }).catch((e)=>{
            reject(e);
        })
    })
}
const costumers={
    getCustomers,AddCustomer
}


export default costumers;