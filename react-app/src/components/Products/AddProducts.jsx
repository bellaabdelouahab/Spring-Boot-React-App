import React from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';
import { useNavigate } from "react-router-dom";

export default function AddProducts () {

    const navigate = useNavigate();
    const [prodname, setProdname] = React.useState('');
    const [qte, setQte] = React.useState(0);
    const [price, setPrice] = React.useState(0);
    const [desc, setDesc] = React.useState('');
// console.log(process.env.PORT_URL);

    const onSubmitForm = async (e) => {
        e.preventDefault();

        fetch(`/add_prod`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" , 
                "Access-Control-Allow-Origin": "/*",
                "Access-Control-Allow-Credentials": "true", 
                "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"
            },
            body: JSON.stringify({
                produitName: prodname,
                quantity: qte,
                price: price,
                description: desc
            }),
            })
            .then((res) => res.json())
            .then((data) => {
            if (data.status === false) {
                console.log(data.msg);
            }
            if (data.status === "ok") {
                console.log(data.msg);
                navigate("/products");
            }
        });
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
            <form onSubmit={(e)=>onSubmitForm(e)}>
              <label htmlFor="name">Product Name :</label><br /><br />
              <input type="text" id="name" name="name" onChange={(e)=>setProdname(e.target.value)}/><br /><br />
              <label htmlFor="email">Quantity :</label><br /><br />
              <input type="number" id="quantity" name="quantity" onChange={(e)=>setQte(e.target.value)}/><br /><br />
              <label htmlFor="password">Price :</label><br /><br />
              <input type="number" id="price" name="price" onChange={(e)=>setPrice(e.target.value)}/><br /><br />
              <label htmlFor="password">Description :</label><br /><br />
              <input type="text" id="description" name="description" onChange={(e)=>setDesc(e.target.value)}/><br /><br />
              <button type="submit">Add</button>
            </form>
          </div>
        </main>
        </>
    )
}
