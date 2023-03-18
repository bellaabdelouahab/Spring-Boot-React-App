import React from "react";
import profile_photo from '../../assets/images/profile-1.jpg';

export default function DetailOrder() {
    return(
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
          <h1>Order Nº 12:</h1><hr />
    
          <div className="products">
          <table>
                <thead>
                    <tr>
                      <th>Nº</th>
                      <th>Price per unit</th>
                      <th>Quantity</th>
                      <th>Product Nº</th>
                      
                      {/* <th>Confirmed</th>
                      <th>Shipped</th>
                      <th>Received</th>
                      <th>client</th> */}
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table><br />
            </div>
        </main>
      </>
    )
}