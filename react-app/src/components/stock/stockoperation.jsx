import React,{useState,useEffect} from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';
import StockOp from '../../Api/StockOpApi';
export default function StockOperations() {
  const [orders, setOrders] = useState([]);
  const [LoadData, setLoadData] = useState(true)
  useEffect(() => {
      StockOp.getStockData.then((data)=>{
        setOrders(data);
      })
  }, [LoadData]);
  
  
  const exitedDate=(order)=>{
    if(order.exitedDate==null){
      return "-";
    }
    return order.exitedDate;
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
          <h1>Stock Data:</h1><hr />
          <div className='right'>
            <div className='top'>
              <div className="add-product">
                <button id='btn-add' onClick={() => {
                        window.open("/products/add", "_blank");
                    }}>
                    <span className="material-icons-sharp">
                        add
                    </span>
                    Add Stock
                </button>
            </div>
            </div>
            </div>  
          <div className="products">
          <table>
                <thead>
                    <tr>
                      <th>Nº</th>
                      <th>Entred date</th>
                      <th>Exited date</th>
                      <th>Label</th>
                      <th>Nº Product</th>
                      <th>Quantity</th>
                      <th>Quantity Consumed</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.enteredDate}</td>
                            <td>{exitedDate(order)}</td>
                            <td>{order.label}</td>
                            <td>{order.productId}</td>
                            <td>{order.quantity}</td>
                            <td>{order.quantityConsumed}</td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
            </div>
        </main>
      </>
      )
}