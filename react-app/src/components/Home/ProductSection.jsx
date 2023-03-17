import React,{useEffect,useState} from "react";


export default function ProductSection({data,addToCart}) {

    return(
        <section className="product-section-home">
            {
                data?.map((prd)=>{
                    return(<div className="product" key={prd.id} >
                        <div id="image-product" style={{backgroundImage:`url(${prd.imagesrc})`}}>
                            <div id="btn-add-tocart"  onClick={()=>addToCart(prd)}>
                                    <span class="material-icons-sharp" style={{"color":"var(--color-primary)"}} >
                                            add_shopping_cart
                                    </span>
                                    <span>add to cart</span>
                            </div>
                            <div id="btn-add-tocart">
                                    <span class="material-icons-sharp" style={{"color":"var(--color-primary)"}} >
                                            info
                                    </span>
                                    <span>details</span>
                            </div>
                        </div>
                        
                        <div>{prd.name}</div>
                        <div>{prd.type}</div>
                        <div>{prd.price*200}DH</div>
                    </div>)
                })
            }
        </section>
    )
}