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
<<<<<<< HEAD
import HomePage from './components/Home/home';
=======
import BasicDocument from "./components/Orders/BasicDocument";
import Mainsign from './components/SignIn/Mainsign';
import PrivateRoutes from './components/PrivateRoutes';

>>>>>>> 40268584318352684541b80db157f0a2eac2edd6
function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
          
          <Route element={<Root />}>
          <Route path="/Dashboard" element={<Dashboard />} />
=======
      <Route element={<PrivateRoutes />}>

        <Route path="/" element={<Root />}>
          <Route path="/" element={<Dashboard />} />
>>>>>>> 40268584318352684541b80db157f0a2eac2edd6

          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/bill" element={<BasicDocument />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProducts />} />
          <Route path="/products/modifier/:id" element={<ModifierProducts />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/stock" element={<StockOperations />} />
          <Route path="/stock/add" element={<AddStock />} />
        </Route>

      </Route>
        <Route path="/login" element={<MainLogin />} />
<<<<<<< HEAD
        <Route path='/' element={<HomePage />} />
=======
        <Route path="/SignIn" element={<Mainsign />} />
>>>>>>> 40268584318352684541b80db157f0a2eac2edd6
        <Route path="*" element={<MainLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

