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
import DetailOrder from './components/Orders/detailOrder';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          
      
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          {/* <Route element={<Root />}> */}
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
      <Route element={<PrivateRoutes />}>
          <Route path="/admin" element={<Root />}>
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="customers" element={<Customers />} />
              <Route path="orders" element={<Orders />} />
              <Route path='orders/detail' element={<DetailOrder />} />
              <Route path="orders/bill" element={<BasicDocument />} />
              {/* <Route path="orders/bill" element={<BasicDocument />} /> */}
              <Route path="products" element={<Products />} />
              <Route path="products/add" element={<AddProducts />} />
              <Route path="products/modifier/:id" element={<ModifierProducts />} />
              <Route path="setting" element={<Setting />} />
              <Route path="stock" element={<StockOperations />} />
              <Route path="stock/add" element={<AddStock />} />
          </Route>
      </Route>
              <Route path='/' element={<HomePage />} />
              <Route path="/login" element={<MainLogin />} />
              <Route path="/SignIn" element={<Mainsign />} />
              <Route path="*" element={<h1>mmmmm</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

