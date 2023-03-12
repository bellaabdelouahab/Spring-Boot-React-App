import React from 'react'
import profile_photo from '../../assets/images/profile-1.jpg';
import './setting.css'

export default function Setting ()  {
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
        <h1>Settings :</h1><hr />
        <div className="setting">
          <form>
            <label htmlFor="name">Name :</label><br /><br />
            <input type="text" id="name" name="name" /><br /><br />
            <label htmlFor="email">Email :</label><br /><br />
            <input type="email" id="email" name="email" /><br /><br />
            <label htmlFor="password">Password :</label><br /><br />
            <input type="password" id="password" name="password" /><br /><br />
            <label htmlFor="password">Confirm Password :</label><br /><br />
            <input type="password" id="password" name="password_conf" /><br /><br />
            <button type="submit">Save</button>
          </form>
        </div>
      </main>
      </>
  )
}
