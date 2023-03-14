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

const costumers={
    getCustomers
}

export default costumers;