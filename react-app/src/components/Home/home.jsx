import React,{useState,useEffect} from "react";
import './home.css';
import ContactInfos from "./contactinfo";
import ProductSection from "./ProductSection";
import productsApi from "../../Api/ProductApi";
import Cart from "./cart";
import Checkout from "./Checkout";
import DetailProduct from "./detailProduct";
import costumers from "../../Api/customersApi";
import OrdersApi from "../../Api/OrdersApi";
import OrderBasketApi from "../../Api/OrderBasketApi";
export default function HomePage() {
    const [Products, setProducts] = useState([]);
    const [load,setLoad]=useState(false);
    const [InCartProducts, setInCartProducts] = useState([]);
    const [OpenBasketWindow, setOpenBasketWindow] = useState(false)
    const [OpenCheckoutWindow, setOpenCheckoutWindow] = useState(false)
    const onCloseBasket=()=>{
        setOpenBasketWindow(false)
    }
    const addtoCart=(product)=>{
        console.log(product)
        if(isInCarte(product.id)){
            ModifyQuantity(product.id,"i",1);
        }
        else{
            setInCartProducts(InCartProducts=>[...InCartProducts,{
                id:product.id,
                quantity:1,
                imagesrc:product.imagesrc,
                name:product.name,
                price:product.price
            }])
        }
        
    }
    const ModifyQuantity=(id,type,quantity)=>{
        const array=[]
        InCartProducts.map((prd)=>{
            if(prd.id===id){
                let q=1;
                if(type==="i") q=prd.quantity+quantity;
                if(type==="r") q=quantity;
                array.push({
                    id:prd.id,
                    quantity:q,
                    imagesrc:prd.imagesrc,
                    name:prd.name,
                    price:prd.price
                })
            }
            else{
                array.push({
                    id:prd.id,
                    quantity:prd.quantity,
                    imagesrc:prd.imagesrc,
                    name:prd.name,
                    price:prd.price
                })
            }
        })
        setInCartProducts(()=>array);
    }
    const isInCarte=(id)=>{
        let v=false;
        InCartProducts.map((prd)=>{
            if(prd.id===id){
                v=true;
            }
        })
        return v;
    }
    
    const removeFromCart=(id)=>{
        let array=[]
        InCartProducts.map((prd)=>{
            if(prd.id!=id){
                array.push(prd)
            }
        })
        setInCartProducts(()=>array)
    }
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
    const openBasket=()=>{setOpenBasketWindow(true);}
    const closeCheckoutWindow=()=>{setOpenCheckoutWindow(false)}
    const OpenCheckout=()=>{setOpenCheckoutWindow(true)}
    const getTotalBasketprice=()=>{
        let total=0;
        InCartProducts.map((product)=>{
            total+=product.price;
        })
        return total;
    }
    const onSubmitOrder=async(firstname,lastname,address,city,phonenumber)=>{
        await costumers.AddCustomer(firstname,lastname,address,city,"",phonenumber).then(async(data)=>{
            await OrdersApi.AddOrder(data.id,"--",getTotalBasketprice()).then((resOrder)=>{
                InCartProducts.map((product)=>{
                    OrderBasketApi.AddBasket(data.id,resOrder.id,product.price,product.quantity).then((data)=>{

                    }).catch((e)=>{
                        console.log(e)
                    })
                })
            })
        })
    }
    if(!load){
        return(<span>Loading ....</span>)
    }
    return(
        <>
            
            <main className="main-home-page" style={{backgroundColor:"var(--color-primary)"}}>
                <ContactInfos />
                
                <span className="basket-item-number">{InCartProducts.length}</span>
                <button className="basket-button" onClick={openBasket}>
                        <span class="material-icons-sharp" style={{"color":"var(--color-background)"}}>
                        shopping_basket
                        </span>
                </button>
                <section className="header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/TT_Electronics_logo.svg/2560px-TT_Electronics_logo.svg.png" alt="logo" width={'400px'} />
                </section>
                <ProductSection data={Products.slice(0,14)} addToCart={addtoCart}/>
                <div className="footer-homepage-panel">
                    Developed By <b>Yassine Boujrada</b>, <b>Youssef Mahdi</b>, <b>Abdelouahab Bella</b>
                </div>
            </main>
            <Cart display={OpenBasketWindow} items={InCartProducts} onChangeQuantity={ModifyQuantity} onClose={onCloseBasket} onRemove={removeFromCart} openCheckout={OpenCheckout}/>
            <Checkout display={OpenCheckoutWindow} items={InCartProducts} onChangeQuantity={ModifyQuantity} onClose={closeCheckoutWindow} onRemove={removeFromCart} onSubmit={onSubmitOrder} />
        </>
    )
}