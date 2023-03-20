import React from "react";
import { useState } from "react";

export default function Checkout({display,onClose,items,onChangeQuantity,onRemove,onSubmit}) {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Address, setAddress] = useState("");
    const [city, setCity] = useState("marrakech");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [OrderCheckoutClicked, setOrderCheckoutClicked] = useState(false)
    const ShowSendMessage=()=>{
        if(OrderCheckoutClicked){
            return <div style={{textAlign:'center',fontFamily:'Poppins'}}>
                Your Order is sent
            </div>
        }
        else{
            return <></>
        }
    }
    if(!display){
        return(<></>)
    }
    return(
        <div className="checkoutpopup-panel">
            <div className="close-btn-cart" onClick={onClose}>
                    <span class="material-icons-sharp" style={{"color":"var(--color-danger)"}}>
                        close
                    </span>
            </div>
            <div className="title-checkout">
                Check-out
            </div>
            <div className="checkoutpanel-form">
                
                <section className="cart-checkout">
                <div className="scrool-product-cart-incheckout">
                    {
                        items?.map((prd)=>{
                            return(
                            <div key={prd.id} className="productpanel-in-basketpopup">
                                <div style={{backgroundImage:`url(${prd.imagesrc})`}} id="image-productpopup"></div>
                                <div id="info-product-popup">
                                    <div id="infos">{prd.name}</div>
                                    <div id="infos">{prd.price}DH</div>
                                    <input value={prd.quantity} type={'number'} onChange={(v)=>{
                                        onChangeQuantity(prd.id,"r",parseInt(v.target.value));
                                        console.log(parseInt(v.target.value))
                                        }}/>
                                    <div className="delete-btn-basket" style={{backgroundColor:"var(--color-danger)"}} onClick={()=>onRemove(prd.id)}>
                                    <span class="material-icons-sharp" style={{"color":"var(--color-background)"}}>
                                        delete
                                    </span>
                                    <span>Remove</span>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
                </section>
                <section className="form-checkout" >
                    <label>First Name</label><br/>
                    <input type="text" value={FirstName} onChange={(text)=>setFirstName(text.target.value)} placeholder="ex:ahmed" id="firstnameinput" /><br/>
                    <label>Last Name</label><br/>
                    <input type="text" value={LastName} onChange={(text)=>setLastName(text.target.value)} placeholder="ex:amrani" id="lastnameinput" /><br/>
                    <label>Address</label><br/>
                    <input type="text" value={Address} onChange={(text)=>setAddress(text.target.value)} placeholder="ex:Rue arrahma casablanca" id="addressinput" /><br/>
                    <label>City</label><br/>
                    <select onChange={(text)=>setCity(text.target.value)}>
                        <option value={"marrakech"}>Marrakech</option>
                        <option value={"rabat"}>Rabat</option>
                        <option value={"agadir"}>Agadir</option>
                        <option value={"casablanca"}>casablanca</option>
                        <option value={"tangier"}>Tangier</option>
                    </select><br/>
                    <label>Phone Number</label><br/>
                    <input type="tel" value={phoneNumber} onChange={(text)=>setPhoneNumber(text.target.value)} id="phonenumberinput" placeholder="ex:0611112211" /><br/>
                    
                    <button className="btn-send-checkout" onClick={()=>{
                        onSubmit(FirstName,LastName,Address,city,phoneNumber)
                        setOrderCheckoutClicked(true)
                        }}>
                        <span class="material-icons-sharp" style={{"color":"var(--color-background)"}}>
                            shopping_cart_checkout
                        </span>
                        <div>check-out</div>
                    </button>
                    {ShowSendMessage()}
                </section>
            </div>
        </div>
    )
}