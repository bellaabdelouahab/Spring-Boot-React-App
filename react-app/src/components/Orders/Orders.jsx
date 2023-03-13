import React,{useState,useEffect} from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';
import axios from 'axios';

export default function Orders() {
    const [orders, setOrders] = useState([]);

    const [LoadData, setLoadData] = useState(true)
  useEffect(() => {
    getData()
  }, [LoadData]);
  const getData=async()=>{
    await axios.get("http://localhost:8081/api/v1/app/orders",{headers: {
    'Content-Type': 'application/json',
    'mode': 'no-cors',
  },withCredentials:true}).then(data=>{
      setOrders(data.data)
      console.log(JSON.stringify(data.data))
    })
    setLoadData(false)
  }


  // useEffect(() => {
  //   fetch("http://localhost:8081/api/v1/app/orders",{
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'mode': 'no-cors',
  //     }
  // })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOrders(data);
  //     });
  // }, []);

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
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      {/* <th>Confirmed</th>
                      <th>Shipped</th>
                      <th>Received</th>
                      <th>client</th> */}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>Order {order.customerid}</td>
                            <td>{order.priceperunit} DH</td>
                            <td>{order.quantity}</td>
                            <td>{order.totalOrderPrice}</td>
                            {/* <td className={order.Status === "Pending"?"warning":"success"}>{order.Status}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table><br />
            </div>
        </main>
      </>
      )
}