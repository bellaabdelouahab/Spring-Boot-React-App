import React,{useState,useEffect} from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';
import StockOp from '../../Api/StockOpApi';
import {CSVLink} from 'react-csv';

export default function StockOperations() {
  const [stocks, setStocks] = useState([]);
  const block_effetc = true;

  const headers = [
      { label: "Nº", key: "id" },
      { label: "Label", key: "label" },
      { label: "Nº Product", key: "productId" },
      { label: "Quantity", key: "quantity" },
      { label: "Quantity Consumed", key: "quantityConsumed" }
    ];
  const getDataStocks=(stocks)=>{
    let array=[]
    stocks?.map((st)=>{
      array.push({
        id:st.id,
        label:st.label,
        productId:st.productId,
        quantity:st.quantity,
        quantityConsumed:st.quantityConsumed
      })
    })
    return array;
  }
  useEffect(() => {
      StockOp.getStockData.then((data)=>{
        setStocks(data);
      })
  }, [block_effetc]);
  
  

  const csvReport = {
      data: getDataStocks(stocks),
      headers: headers,
      filename: 'Stockes.csv'
    };

    return (
        <>
        <main >
        <div className='right'>
        <div className='top'>
        <button id='menu-btn'>
          <span className="material-icons-sharp">menu</span>
        </button>
        <div className='profile' id="special_profile">
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
              <div className="add-product" style={{"justifyContent":"space-evenly","display":"flex","width":350}}>
                <button id='btn-add' onClick={() => {
                        window.open("/admin/stock/add", "_blank");
                    }}>
                    <span className="material-icons-sharp">
                        add
                    </span>
                    Add Stock
                </button>

                <CSVLink {...csvReport} id='csv-add'>Export to CSV</CSVLink>
            </div>
            </div>
            </div>  
          <div className="products">
          <table>
                <thead>
                    <tr>
                      <th>Nº</th>
                      <th>Label</th>
                      <th>Nº Product</th>
                      <th>Quantity</th>
                      <th>Quantity Consumed</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock) => (
                        <tr key={stock.id}>
                            <td>{stock.id}</td>
                            <td>{stock.label}</td>
                            <td>{stock.productId}</td>
                            <td>{stock.quantity}</td>
                            <td>{stock.quantityConsumed}</td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
            </div>
        </main>
      </>
      )
}