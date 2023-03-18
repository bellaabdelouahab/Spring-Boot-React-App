import React from "react";


export default function Checkout({display,onClose,items,onChangeQuantity,onRemove}) {
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
                    <input type="text" placeholder="ex:ahmed" id="firstnameinput" /><br/>
                    <label>Last Name</label><br/>
                    <input type="text" placeholder="ex:amrani" id="lastnameinput" /><br/>
                    <label>Address</label><br/>
                    <input type="text" placeholder="ex:Rue arrahma casablanca" id="addressinput" /><br/>
                    <label>City</label><br/>
                    <select>
                        <option>Marrakech</option>
                        <option>Rabat</option>
                        <option>Agadir</option>
                        <option>casablanca</option>
                        <option>Tanger</option>
                    </select><br/>
                    <label>Phone Number</label><br/>
                    <input type="tel" id="phonenumberinput" placeholder="ex:0611112211" /><br/>
                    
                    <button className="btn-send-checkout">
                        <span class="material-icons-sharp" style={{"color":"var(--color-background)"}}>
                            shopping_cart_checkout
                        </span>
                        <div>check-out</div>
                    </button>
                    
                </section>
            </div>
        </div>
    )
}