import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from './components/root';
import Customers from './components/Customers/Customers';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Setting from './components/Settings/Setting';
import AddProducts from './components/Products/AddProducts';
import ModifierProducts from './components/Products/ModifierProducts';
import StockOperations from './components/stock/stockoperation';
import MainLogin from './components/Login/MainLogin';
import AddStock from './components/stock/addStock';
import HomePage from './components/Home/home';
import BasicDocument from "./components/Orders/BasicDocument";
import Mainsign from './components/SignIn/Mainsign';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          
      
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          {/* <Route element={<Root />}> */}
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
      <Route element={<PrivateRoutes />}>

          <Route path="/a/" element={<Root />}>
              <Route path="/a/Dashboard" element={<Dashboard />} />

              <Route path="/a/customers" element={<Customers />} />
              <Route path="/a/orders" element={<Orders />} />
              {/* <Route path="/orders/bill" element={<BasicDocument />} /> */}
              <Route path="/a/products" element={<Products />} />
              <Route path="/a/products/add" element={<AddProducts />} />
              <Route path="/a/products/modifier/:id" element={<ModifierProducts />} />
              <Route path="/a/setting" element={<Setting />} />
              <Route path="/a/stock" element={<StockOperations />} />
              <Route path="/a/stock/add" element={<AddStock />} />
          </Route>
      </Route>
              <Route path="/login" element={<MainLogin />} />
              <Route path='/' element={<HomePage />} />
              <Route path="/SignIn" element={<Mainsign />} />
              <Route path="*" element={<MainLogin />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

