import React from 'react'
import './dash.css'
import profile_photo from '../../assets/images/profile-1.jpg';
import { useState,useEffect } from 'react';
import OrdersApi from '../../Api/OrdersApi';
import { Link } from 'react-router-dom';
import productsApi from '../../Api/ProductApi';
import OrderBasketApi from '../../Api/OrderBasketApi';

export default function Dashboard (){
  const [ordersData, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [LoadData, setLoadData] = useState(true)
  const [TotalExpensesV, setTotalExpenses] = useState()

  const block_effetc = true;
  const TotalExpensesPerOrder=async(id)=>{
    return new Promise((resolve,reject)=>{
      let BasketData;
      let total = 0;
      OrderBasketApi.getOrderBasketByOrderNumber(id).then((basketdata)=>{
        BasketData=basketdata;
      }).catch((e)=>{
        console.log(e);
      })
      BasketData.map((basket)=>{
        total+=basket.product.price;
      })
      resolve(total)
      
    })
  }
  const TotalExpenses=async()=>{
    let total=0;
      await OrderBasketApi.getAllOrderBasketData().then((data)=>{
          data?.map((basket)=>{
              total+=basket.product.price;
          })
      })
      setTotalExpenses(()=>total)
  }
  useEffect(()=>{
    OrdersApi.getDataOrders.then((data)=>{
      setOrders(data)
    });
    // TotalExpenses()
    
    TotalExpenses()
    console.log(ordersData)
    getProdData();
    if(TotalExpensesV==0){
      setLoadData()
    }
    console.log("ex"+TotalExpenses())

  },[LoadData])

  const getProdData=async()=>{
    productsApi.getProducts.then((data)=>{
      setProducts(data)
    })
    setLoadData(false)
  }

  const TotalSales = () => {
    let total = 0;
    ordersData.forEach((order) => {
      if(order.orderDate.split('-')[0] === new Date().getFullYear().toString()){
        total += order.totalOrderPrice
      }
    });
    return total;
  }
  
  const TotalIncomes = () => {  
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });
    console.log("total",total);
    return total-TotalSales();
  }

  return (
    <>
    <main>
        <h1>Dashboard</h1>
        <br />
        <div className="insights">
        
            <div className="sales">
                <span className="material-icons-sharp">analytics</span>
                <div className="middle">
                    <div className='left'>
                        <h3>Total Sales</h3>
                        <h1>{TotalSales()} DH</h1>
                    </div>
                    <div className='progress'>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div className="number">
                            <p>90 %</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>This Month</small>
            </div>

            <div className="expenses">
                <span className="material-icons-sharp">bar_chart</span>
                <div className="middle">
                    <div className='left'>
                        <h3>Total Expenses</h3>
                        <h1>{TotalExpensesV} DH</h1>
                    </div>
                    <div className='progress'>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div className="number">
                            <p>60%</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>This Month</small>
            </div>

            <div className="income">
                <span className="material-icons-sharp">stacked_line_chart</span>
                <div className="middle">
                    <div className='left'>
                        <h3>Total incomes</h3>
                        <h1>{TotalIncomes()} DH</h1>
                    </div>
                    <div className='progress'>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div className="number">
                            <p>{parseInt(TotalIncomes()/TotalSales())*100}%</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>This Month</small>
            </div>
        </div>
        <br />
        <div className="recent-orders">
            <h2>Recent Orders</h2>
            <table>
                <thead>
                <tr>
                      <th>Nº</th>
                      <th>Total</th>
                      <th>Client name</th>
                      <th>City</th>
                      <th>Order date</th>
                      <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    ordersData.reverse().slice(0,2).map((order) => (
                      <tr key={order.id}>
                          <td>{order.id}</td>
                          <td>{order.totalOrderPrice} DH</td>
                          <td>{order.customer.firstName+" "+order.customer.lastName}</td>
                          <td>{order.customer.city}</td>
                          <td>{order.orderDate}</td>
                          <td>{order.status}</td>
                          {/* <td className={order.Status === "Pending"?"warning":"success"}>{order.Status}</td> */}
                      </tr>
                    ))
                  }
                    {/* <tr>
                        <td>Foldable mini drone</td>
                        <td>123456789</td>
                        <td>Paypal</td>
                        <td className='warning'>Pending</td>
                    </tr>
                    <tr>
                        <td>Foldable mini drone</td>
                        <td>123456789</td>
                        <td>Paypal</td>
                        <td className='warning'>Pending</td>
                    </tr> */}
                </tbody>
            </table><br />
            <Link to={"/orders"}>View All</Link>
        </div>
    </main>
    <div className='right'>
    <div className='top'>
      <button id='menu-btn'>
        <span className="material-icons-sharp">menu</span>
      </button>
      <div className='profile'>
        <div className="info">
          <p> Hey, <b>Yassine</b></p>
          <small className="text-muted">Welcome Admin</small>
        </div>
        <div className='profile-photo'>
          <img src={profile_photo} className='profile-photo' alt='profile' />
        </div>
      </div>
    </div><br />
    <div className='sales-analytics'>
      <h2>Sales analytics</h2><br />

      <div className='item online'>
        <div className='icon'>
          <span className="material-icons-sharp">shopping_cart</span>
        </div>
        <div className='right'>
          <div className='info'>
            <h3>ONLINE ORDERS</h3>
            <small className="text-muted">This Month</small>
          </div>
          <h5 className='success'>+39%</h5>
          <h3>3888</h3>
        </div>
      </div>

      <div className='item offline'>
        <div className='icon'>
          <span className="material-icons-sharp">local_mall</span>
        </div>
        <div className='right'>
          <div className='info'>
            <h3>OFFLINE ORDERS</h3>
            <small className="text-muted">This Month</small>
          </div>
          <h5 className='danger'>-19%</h5>
          <h3>1034</h3>
        </div>
      </div>

      <div className='item customers'>
        <div className='icon'>
          <span className="material-icons-sharp">person</span>
        </div>
        <div className='right'>
          <div className='info'>
            <h3>NEW CUSTOMERS</h3>
            <small className="text-muted">This Month</small>
          </div>
          <h5 className='success'>+20%</h5>
          <h3>40</h3>
        </div>
      </div>

    </div>
  </div>
  </>
  )
}
