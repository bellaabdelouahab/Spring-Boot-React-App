import React,{useState,useEffect} from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';
import axios from 'axios';
import OrdersApi from '../../Api/OrdersApi';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [LoadData, setLoadData] = useState(true)
    const Navigate=useNavigate()
  useEffect(() => {
    getData()
  }, [LoadData]);
  const getData=async()=>{
      await OrdersApi.getDataOrders.then((data)=>{
          setOrders(data)
      })
      
  }
  const headers = [
    { label: "Nº", key: "id" },
    { label: "customer name", key: "customername" },
    { label: "customer Address", key: "customeraddress" },
    { label: "Order Date", key: "orderdate" },
    { label: "Confirmation Date", key: "confirmationdate" },
    { label: "Shipping Date", key: "shippingdate" },
    { label: "Receiving Date", key: "receivingdate" },
    { label: "Total Price", key: "price" },
    { label: "status", key: "status" },
    { label: "label", key: "label" }
  ];
  const NullHandlerDate=(date)=>{
    if(date===null){
      return "-"
    }
    return date;
}
  const getDataOrdersForCSV=(orders)=>{
    let array=[]
    orders?.map((order)=>{
      array.push({
        id:order.id,
        customername:(order.customer.firstName+" "+order.customer.lastName),
        customeraddress:(order.customer.address+","+order.customer.city),
        orderdate:order.orderDate,
        confirmationdate:NullHandlerDate(order.confirmationDate),
        receivingdate:NullHandlerDate(order.receivingDate),
        shippingdate:NullHandlerDate(order.shippingDate),
        price:order.totalOrderPrice,
        status:order.status,
        label:order.label
      })

    })

    return array;
  }
  
  const csvReport = {
    data: getDataOrdersForCSV(orders),
    headers: headers,
    filename: 'orders.csv'
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
                      
                      <th>Total</th>
                      <th>Client Name</th>
                      <th>client Address</th>
                      <th>Order date</th>
                      <th>Status</th>
                      <th>Action</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.totalOrderPrice} DH</td>
                            <td>{order.customer.firstName+" "+order.customer.lastName}</td>
                            <td>{order.customer.address+","+order.customer.city}</td>
                            <td>{order.orderDate}</td>
                            <td>{OrdersApi.statusOrder(order)}</td>
                            {/* <td className={order.Status === "Pending"?"warning":"success"}>{order.Status}</td> */}
                            <td >
                              <div className='prod-func'>
                                  {/* <span class="material-icons-sharp" style={{"color":"var(--color-primary)"}} onClick={()=>{
                                      return navigate(`/products/modifier/${product.id}`, {state:{ product }} );
                                    }}>
                                    add
                                  </span> */}
                                
                                {/* <span class="material-icons-sharp" style={{"color":"var(--color-danger)"}}>
                                  edit
                                </span> */}
                                <span onClick={()=>Navigate("/a/orders/bill",{state:order})} class="material-icons-sharp" style={{"color":"var(--color-dark  )"}}>
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