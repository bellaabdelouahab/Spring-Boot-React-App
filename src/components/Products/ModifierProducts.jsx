import React from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';
import { useNavigate,useLocation } from "react-router-dom";

export default function ModifierProducts () {
    const navigate = useNavigate();
    var {state} = useLocation();

    const [prodname, setProdname] = React.useState(state.product.produitName);
    const [qte, setQte] = React.useState(state.product.quantity);
    const [price, setPrice] = React.useState(state.product.price);
    const [desc, setDesc] = React.useState(state.product.description);
    
    const onSubmitForm = async (e,id) => {
        e.preventDefault();

        fetch(`http://localhost:8081/api/v1/app/product/${id}`, {
            method: "PUT",
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
                alert("error");
            }
            if (data.status === "ok") {
                console.log(data.msg);
                navigate("/products");
            }
        }
        );
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
          <h1>Modify Product :</h1><hr />
          <div className="setting">
            <form onSubmit={(e)=>onSubmitForm(e,state.product._id)}>
              <label htmlFor="name">Product Name :</label><br /><br />
              <input type="text" id="name" name="produitName" value={state.product.produitName} onChange={(e)=>setProdname(e.target.value)}/><br /><br />
              <label htmlFor="email">Quantity :</label><br /><br />
              <input type="number" id="quantity" name="quantity" value={state.product.quantity} onChange={(e)=>setQte(e.target.value)}/><br /><br />
              <label htmlFor="password">Price :</label><br /><br />
              <input type="number" id="price" name="price" value={state.product.price} onChange={(e)=>setPrice(e.target.value)}/><br /><br />
              <label htmlFor="password">Description :</label><br /><br />
              <input type="text" id="description" name="description" value={state.product.description} onChange={(e)=>setDesc(e.target.value)}/><br /><br />
              <button type="submit">Modify</button>
            </form>
          </div>
        </main>
        </>
    )
}
