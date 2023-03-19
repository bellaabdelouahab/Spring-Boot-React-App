import React,{useState,useEffect} from 'react'
import "./Products.css";
import profile_photo from '../../assets/images/profile-1.jpg';
// import { useNavigate } from "react-router-dom";
import productsApi from '../../Api/ProductApi';
import {CSVLink} from 'react-csv';

export default function Products () {
  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [LoadData, setLoadData] = useState(true)
  useEffect(() => {
    getData()
  }, [LoadData]);
  const getData=async()=>{
    productsApi.getProducts.then((data)=>{
      setProducts(data)
    })
    setLoadData(false)
  }

  const delete_this = (id) => {
    productsApi.deleteProductById(id).then((res)=>{
        console.log(res)
    })
  };
  const headers = [
    { label: "Nº", key: "id" },
    { label: "Name", key: "name" },
    { label: "Price", key: "price" },
    { label: "Type", key: "type" },
    { label: "Description", key: "description" }
  ];

  const csvReport = {
    data: products,
    headers: headers,
    filename: 'products.csv'
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
    
      <h1>Products :</h1><hr />
      <div className='right'>
    <div className='top'>
      <div className="add-product" style={{"justifyContent":"space-evenly","display":"flex","width":350}}>
        <button id='btn-add' onClick={() => {
                window.open("/a/products/add", "_blank");
            }}>
            <span className="material-icons-sharp">
                add
            </span>
            Add Product
        </button>

        <CSVLink {...csvReport} id='csv-add'>Export to CSV</CSVLink>
    </div>
    </div>
    </div>  

      <div className="products">
            <table>
                <thead>
                    <tr>
                      <th>Nº</th>
                      <th>Name</th>
                      <th>price</th>
                      <th>type</th>
                      <th>Description</th>
                      {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody className='scrool-tbody-proudcts'>
                    {products?.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.type}</td>
                            <td>{product.description}</td>
                            <td >
                              <div className='prod-func'>
                                  {/* <span class="material-icons-sharp" style={{"color":"var(--color-primary)"}} onClick={()=>{
                                      return navigate(`/products/modifier/${product.id}`, {state:{ product }} );
                                    }}>
                                    add
                                  </span> */}
                                
                                {/* <span class="material-icons-sharp" style={{"color":"var(--color-danger)"}}  onClick={()=>delete_this(product.id)}>
                                  delete
                                </span> */}
                              </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
            </div>
    </main>
  </>
  )
}
