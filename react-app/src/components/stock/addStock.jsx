import React,{useState} from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';
import { useNavigate } from "react-router-dom";
import StockOp from '../../Api/StockOpApi';
export default function AddStock () {

    const navigate = useNavigate();

    // Form 
    const [ProductNumber, setProductNumber] = useState();
    const [Quantity, setQuantity] = useState();
    const [Label, setLabel] = useState("");
// console.log(process.env.PORT_URL);

    const onSubmitForm = async () => {
        await StockOp.addStockOp(ProductNumber,Quantity,Label).then((data)=>{
          console.log(data)
        }).catch((e)=>{
          console.log(e)
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
          <h1>Add Stock :</h1><hr />
          <div className="setting">
            <div className="form">
              {/* <label htmlFor="name">Product Name :</label><br /><br />
              <input type="text" id="name" name="name" onChange={(e)=>setproductName(e.target.value)}/><br /><br /> */}
              <label htmlFor="name">Product Number :</label><br /><br />
              <input type="number" id="name" placeholder='' onChange={(e)=>setProductNumber(e.target.value)}/><br /><br />
              <label htmlFor="password">Quantity :</label><br /><br />
              <input type="number" id="price" placeholder=''  onChange={(e)=>setQuantity(e.target.value)}/><br /><br />
              <label htmlFor="password">Label :</label><br /><br />
              <input type="text" id="description" name="description" onChange={(e)=>setLabel(e.target.value)}/><br /><br />
              <button onClick={onSubmitForm}>Add</button>
            </div>
          </div>
        </main>
        </>
    )
}
