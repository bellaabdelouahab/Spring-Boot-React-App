import React,{useState,useEffect} from "react";
import './home.css';
import ContactInfos from "./contactinfo";
import ProductSection from "./ProductSection";
import productsApi from "../../Api/ProductApi";
export default function HomePage() {
    const [Products, setProducts] = useState([]);
    const [load,setLoad]=useState(false)
    useEffect(()=>{
        loadData()
    },[load])
    const loadData=async()=>{
        productsApi.getProducts.then((data)=>{
            setProducts(data)
            setLoad(true)
        }).catch((e)=>{
            console.log(e)
        })
    }
    if(!load){
        return(<span>Loading ....</span>)
    }
    return(
        <>
            <main className="main-home-page" style={{backgroundColor:"var(--color-primary)"}}>
                <ContactInfos />
                <section className="header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TT_Electronics_logo.svg/2560px-TT_Electronics_logo.svg.png" alt="logo" width={'400px'} />
                </section>
                <ProductSection data={["helllo"]} />
            </main>
        </>
    )
}