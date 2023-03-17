import React from "react";

export default function Cart({display,onClose,items,onChangeQuantity,onRemove,openCheckout}) {
    if(display){
        return(
            <section className="cart-items-panel">
                <div className="cart-title-component">
                    <span class="material-icons-sharp" style={{"color":"var(--color-primary)"}}>
                            shopping_basket
                    </span>
                    <span>Cart</span>
                </div>
                <div className="close-btn-cart">
                    <span class="material-icons-sharp" style={{"color":"var(--color-danger)"}} onClick={onClose}>
                        close
                    </span>
                </div>
                <div className="scrool-product-cart">
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
                <div className="checkout-link-button" style={{backgroundColor:"var(--color-primary)","color":"var(--color-background)"}} onClick={openCheckout}>
                    <span class="material-icons-sharp" style={{"color":"var(--color-background)"}}>
                        shopping_cart_checkout
                    </span>
                    check-out
                </div>
            </section>
        )
    }
    return(
        <></>
    )
}