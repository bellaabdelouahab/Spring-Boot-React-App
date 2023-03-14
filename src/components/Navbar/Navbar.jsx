import React from 'react'
import './navbar.css'
import closeLogo from '../../assets/images/close.svg'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
export default function Navbar () {
  var currentpage = window.location.pathname;

  return (
        <aside>
            <div className='top'>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h2>My ST<span style={{"color":"#ff9800"}}>ORE</span></h2>
                </div>
                <div className="close" id="close-btn">
                    <span className="material-symbols-outlined">
                        <img src={closeLogo} alt="close" />
                    </span>
                </div>
            </div>

            <div className="sidebar">
                <NavLink to="/">
                    <span className="material-icons-sharp">grid_view</span>
                    <h3>Dashboard</h3>
                </NavLink>

                <NavLink to="/customers">
                    <span className="material-icons-sharp">person_outline</span>
                    <h3>Customers</h3>
                </NavLink>

                <NavLink to="/orders">
                    <span className="material-icons-sharp">receipt_long</span>
                    <h3>Orders</h3>
                </NavLink>

                <NavLink to="/stock">
                    <span className="material-icons-sharp">receipt_long</span>
                    <h3>Stock</h3>
                </NavLink>

                <NavLink to="/products">
                    <span className="material-icons-sharp">inventory</span>
                    <h3>Products</h3>
                </NavLink>

                <NavLink to="/setting">
                    <span className="material-icons-sharp">settings</span>
                    <h3>Settings</h3>
                </NavLink>

                <NavLink to="/logout" >
                    <span className="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </NavLink>
            </div>

        </aside>
  )
}
