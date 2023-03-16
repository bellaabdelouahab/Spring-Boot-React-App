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
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/app" element={<Root />}>
          <Route path="/app/Dashboard" element={<Dashboard />} />

          <Route path="/app/customers" element={<Customers />} />
          <Route path="/app/orders" element={<Orders />} />
          <Route path="/app/products" element={<Products />} />
          <Route path="/app/products/add" element={<AddProducts />} />
          <Route path="/app/products/modifier/:id" element={<ModifierProducts />} />
          <Route path="/app/setting" element={<Setting />} />
          <Route path="/app/stock" element={<StockOperations />} />
          <Route path="/app/stock/add" element={<AddStock />} />
        </Route>
        <Route path="/app/login" element={<MainLogin />} />
        <Route path="*" element={<MainLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

