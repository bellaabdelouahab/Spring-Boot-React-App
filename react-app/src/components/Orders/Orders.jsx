import React,{useState,useEffect} from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';
import axios from 'axios';
import OrdersApi from '../../Api/OrdersApi';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    // const [LoadData, setLoadData] = useState(true);

    
    useEffect(() => {
        getData()
      }, [true]);
      const getData=async()=>{
          await OrdersApi.getDataOrders.then((data)=>{
              setOrders(data)
      })
    }
    return (
        <>
        <main >
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
      </div>
      <br />
      </div>
          <h1>Orders Data:</h1><hr />
    
          <div className="products">
          <table>
                <thead>
                    <tr>
                      <th>Nº</th>
                      <th>Price per unit</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Client Nº</th>
                      <th>Product Nº</th>
                      <th>Order date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.priceperunit} DH</td>
                            <td>{order.quantity}</td>
                            <td>{order.totalOrderPrice} DH</td>
                            <td>{order.customerid}</td>
                            <td>{order.productId}</td>
                            <td>{order.orderDate}</td>
                            <td className={OrdersApi.statusOrder(order) === "confirmed"?"success" : "warning"}>{OrdersApi.statusOrder(order)}</td>
                            <td >
                              <div className='prod-func'>                                
                                <span class="material-icons-sharp" style={{"color":"var(--color-danger)"}}>
                                  edit
                                </span>
                                <span class="material-icons-sharp" style={{"color":"var(--color-black)"}}>
                                  article
                                </span>
                              </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
            </div>
        </main>
      </>
      )
}