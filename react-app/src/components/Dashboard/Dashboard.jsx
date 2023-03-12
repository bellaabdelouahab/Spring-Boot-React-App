import React from 'react'
import './dash.css'
import profile_photo from '../../assets/images/profile-1.jpg';

export default function Dashboard (){
  
  return (
    <>
    <main>
        <h1>Dashboard</h1>
        <br />
        <div className="insights">
        
            <div className="sales">
                <span className="material-icons-sharp">analytics</span>
                <div className="middle">
                    <div className='left'>
                        <h3>Total Sales</h3>
                        <h1>$25,024</h1>
                    </div>
                    <div className='progress'>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div className="number">
                            <p>81%</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 Hours</small>
            </div>

            <div className="expenses">
                <span className="material-icons-sharp">bar_chart</span>
                <div className="middle">
                    <div className='left'>
                        <h3>Total Expenses</h3>
                        <h1>$25,024</h1>
                    </div>
                    <div className='progress'>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div className="number">
                            <p>60%</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 Hours</small>
            </div>

            <div className="income">
                <span className="material-icons-sharp">stacked_line_chart</span>
                <div className="middle">
                    <div className='left'>
                        <h3>Total incomes</h3>
                        <h1>$25,024</h1>
                    </div>
                    <div className='progress'>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div className="number">
                            <p>40%</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 Hours</small>
            </div>
        </div>
        <br />
        <div className="recent-orders">
            <h2>Recent Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Number</th>
                        <th>Payement</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Foldable mini drone</td>
                        <td>123456789</td>
                        <td>Paypal</td>
                        <td className='warning'>Pending</td>
                    </tr>
                    <tr>
                        <td>Foldable mini drone</td>
                        <td>123456789</td>
                        <td>Paypal</td>
                        <td className='warning'>Pending</td>
                    </tr>
                </tbody>
            </table><br />
            <a href={"/products"}>View All</a>
        </div>
    </main>
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
    </div><br />
    <div className='sales-analytics'>
      <h2>Sales analytics</h2><br />

      <div className='item online'>
        <div className='icon'>
          <span className="material-icons-sharp">shopping_cart</span>
        </div>
        <div className='right'>
          <div className='info'>
            <h3>ONLINE ORDERS</h3>
            <small className="text-muted">Last 24 Hours</small>
          </div>
          <h5 className='success'>+39%</h5>
          <h3>3888</h3>
        </div>
      </div>

      <div className='item offline'>
        <div className='icon'>
          <span className="material-icons-sharp">local_mall</span>
        </div>
        <div className='right'>
          <div className='info'>
            <h3>OFFLINE ORDERS</h3>
            <small className="text-muted">Last 24 Hours</small>
          </div>
          <h5 className='danger'>-19%</h5>
          <h3>1034</h3>
        </div>
      </div>

      <div className='item customers'>
        <div className='icon'>
          <span className="material-icons-sharp">person</span>
        </div>
        <div className='right'>
          <div className='info'>
            <h3>NEW CUSTOMERS</h3>
            <small className="text-muted">Last 24 Hours</small>
          </div>
          <h5 className='success'>+20%</h5>
          <h3>40</h3>
        </div>
      </div>

    </div>
  </div>
  </>
  )
}
