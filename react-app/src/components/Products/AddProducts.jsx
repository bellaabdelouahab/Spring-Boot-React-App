import React,{useState} from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function AddProducts () {

    const navigate = useNavigate();
    const [productName, setproductName] = React.useState('');
    const [Type, setType] = useState("");
    const [price, setPrice] = React.useState(0);
    const [desc, setDesc] = React.useState('');
    const [ImageSrc, setImageSrc] = useState("");
// console.log(process.env.PORT_URL);

    const onSubmitForm = async () => {
        console.log("first")
        await axios.post('http://localhost:8081/api/v1/app/product',{"price": 3,
        "name":productName,
        "description":desc,
        "type":desc,
        "imagesrc":ImageSrc}).then((res)=>{
            console.log(res.data)
        })
        
        // await fetch(`http://localhost:8081/api/v1/app/product`, {
        //     method: "POST",
        //     headers: { 
        //         "Content-Type": "application/json" , 
        //         "Access-Control-Allow-Origin": "/*",
        //         "Access-Control-Allow-Credentials": "true", 
        //         "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"
        //     },
        //     body: {
        //       "price":price,
        //       "name": productName,
        //       "description":desc,
        //       "type":Type,
        //       "imagesrc":ImageSrc
        //     },
        //     })
        //     .then((res) => res.json())
        //     .then((data) => {
        //       console.log(data)
        //     // if (data.status === false) {
        //     //     console.log(data.msg);
        //     // }
        //     // if (data.status === "ok") {
        //     //     console.log(data.msg);
        //     //     navigate("/products");
        //     // }
        // });
        console.log(productName)
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
          <h1>Add Product :</h1><hr />
          <div className="setting">
            <div className="form">
              <label htmlFor="name">Product Name :</label><br /><br />
              <input type="text" id="name" name="name" onChange={(e)=>setproductName(e.target.value)}/><br /><br />
              <label htmlFor="name">Image source :</label><br /><br />
              <input type="text" id="name" name="name" onChange={(e)=>setImageSrc(e.target.value)}/><br /><br />
              <label htmlFor="password">Price :</label><br /><br />
              <input type="number" id="price" name="price" onChange={(e)=>setPrice(e.target.value)}/><br /><br />
              <label htmlFor="password">Type :</label><br /><br />
              <input type="text" id="price" name="price" onChange={(e)=>setType(e.target.value)}/><br /><br />
              <label htmlFor="password">Description :</label><br /><br />
              <input type="text" id="description" name="description" onChange={(e)=>setDesc(e.target.value)}/><br /><br />
              <button onClick={onSubmitForm}>Add</button>
            </div>
          </div>
        </main>
        </>
    )
}
