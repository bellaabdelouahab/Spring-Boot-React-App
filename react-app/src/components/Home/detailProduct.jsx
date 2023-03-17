import React from "react";


export default function DetailProduct({display,onClose,Product,onAddToCart}) {
    return(
        <div className="detail-product-pop-up">
            <div className="close-btn-cart" onClick={onClose}>
                    <span class="material-icons-sharp" style={{"color":"var(--color-danger)"}}>
                        close
                    </span>
            </div>
        </div>
    )
}