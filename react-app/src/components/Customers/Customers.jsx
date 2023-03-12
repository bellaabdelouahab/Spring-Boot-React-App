import React,{useState,useEffect} from 'react';
import profile_photo from '../../assets/images/profile-1.jpg';

export default function Customers () {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("/costumer_data")
        .then((res) => res.json())
        .then((data) => {
            setCustomers(data);
        });
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
                        <tr key={customer._id}>
                            <td>{customer.fullName}</td>
                            <td>{customer.adresse}</td>
                            <td>Order {customer.orders}</td>
                            <td>{customer.dateOrder}</td>
                        </tr>
                    ))}
                </tbody>
                </table><br />
                </div>
        </main>
      </>
      )
}