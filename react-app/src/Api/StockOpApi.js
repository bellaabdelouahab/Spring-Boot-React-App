import config from "./ConfigApi"

const getStockData=new Promise((resolve,reject)=>{
    fetch(`${config.getApiPath()}/api/v1/app/stockop`)
      .then((res) => res.json())
      .then((data) => {
        resolve(data)
      }).catch((e)=>{
        reject(e)
      })
})


const StockOp={
    getStockData
}
export default StockOp;