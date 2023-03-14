import React,{useState,useEffect} from 'react';
import profile_photo from '../../assets/images/profile-1.jpg';
import costumers from '../../Api/customersApi';
export default function Customers () {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        costumers.getCustomers.then((data)=>{
          setCustomers(data)
        })
    }, []);

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
          <h1>Customers :</h1><hr />
          
          <div className="products">
                <table>
                    <thead>
                        <tr>
                          <th>Nº</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Address</th>
                          <th>City</th>
                          <th>Phone Number</th>
                          <th>Join Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.address}</td>
                            <td>{customer.city}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.joinDate}</td>
                        </tr>
                    ))}
                </tbody>
                </table><br />
                </div>
        </main>
      </>
      )
}