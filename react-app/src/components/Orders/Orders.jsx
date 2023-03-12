import React,{useState,useEffect} from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';

export default function Orders() {
    const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/order_data")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

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
                      <th>Confirmed</th>
                      <th>Shipped</th>
                      <th>Received</th>
                      <th>client</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td>Order {order.orderName}</td>
                            <td>{order.price} DH</td>
                            <td>{order.quantity}</td>
                            <td>{order.Total}</td>
                            <td className={order.Status === "Pending"?"warning":"success"}>{order.Status}</td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
            </div>
        </main>
      </>
      )
}