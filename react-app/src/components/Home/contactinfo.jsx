import React from "react";


export default function ContactInfos() {
    return(
        <section className="contactinfos">
                    <a href="tel:+212645445522">
                        <span class="material-icons-sharp" style={{"color":"var(--color-background)"}}>
                            phone
                        </span>
                        <span id="textcontact">
                            +212645445522
                        </span>
                    </a>
                    <a href="mailto:contact@electronics.com">
                        <span class="material-icons-sharp" style={{"color":"var(--color-background)"}}>
                            mail
                        </span>
                        <span id="textcontact">
                            contact@electronics.com
                        </span>
                        
                    </a>
                    <a>
                        <span class="material-icons-sharp" style={{"color":"var(--color-background)"}}>
                            home
                        </span>
                        <span id="textcontact">
                            822,Anfa,casablanca
                        </span>
                        
                    </a>
                </section>
    )
}