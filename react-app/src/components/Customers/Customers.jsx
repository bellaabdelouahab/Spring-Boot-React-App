import React,{useState,useEffect} from 'react';
import profile_photo from '../../assets/images/profile-1.jpg';
import costumers from '../../Api/customersApi';
import {CSVLink} from 'react-csv';

export default function Customers () {
    const [customers_, setCustomers] = useState([]);
    const block_effetc = true;

    const headers = [
      { label: "Nº", key: "id" },
      { label: "First Name", key: "firstName" },
      { label: "Last Name", key: "lastName" },
      { label: "Address", key: "address" },
      { label: "City", key: "city" },
      { label: "Phone Number", key: "phoneNumber" },
      { label: "Join Date", key: "joinDate" }
    ];

    useEffect(() => {
        costumers.getCustomers.then((data)=>{
          setCustomers(data)
        })
    }, [block_effetc]);

    const csvReport = {
      data: customers_,
      headers: headers,
      filename: 'costumers.csv'
    };

    return (
        <>
        <main >
        <div className='right'>
        <div className='top'>
        <button id='menu-btn'>
          <span className="material-icons-sharp">menu</span>
        </button>
        <div className='profile' id="special_profile">
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
          <div className='right'>
            <div className='top success'>
              <div className="add-product">
                <CSVLink {...csvReport} id='csv-add'>Export to CSV</CSVLink>
            </div>
            </div>
          </div>  
          
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
                    {customers_.map((customer) => (
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