import React,{useState,useEffect} from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';
import OrdersApi from '../../Api/OrdersApi';
import {CSVLink} from 'react-csv';
import { useNavigate } from "react-router-dom";

export default function Orders() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const block_effetc = true;

    const headers = [
      { label: "Nº", key: "id" },
      { label: "Price per unit", key: "priceperunit" },
      { label: "Quantity", key: "quantity" },
      { label: "Total", key: "totalOrderPrice" },
      { label: "Client Nº", key: "customerid" },
      { label: "Product Nº", key: "productId" },
      { label: "Order date", key: "orderDate" },
      { label: "Status", key: "status" }
    ];
    
    useEffect(() => {
        getData()
    }, [block_effetc]);

    const getData=async()=>{
      await OrdersApi.getDataOrders.then((data)=>{
          setOrders(data)
      })
    }

    const csvReport = {
      data: orders,
      headers: headers,
      filename: 'Orders.csv'
    };

    const generer_bill = (order) => {
      navigate("/orders/bill", { state: order });
    };

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
          <div className='right'>
            <div className='top success'>
              <div className="add-product">
                <CSVLink {...csvReport} id='csv-add'>Export to CSV</CSVLink>
            </div>
            </div>
          </div>  
          
    
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
                                <span class="material-icons-sharp" style={{"color":"var(--color-black)"}} onClick={()=>generer_bill(order)}>
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