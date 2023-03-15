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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProducts />} />
          <Route path="/products/modifier/:id" element={<ModifierProducts />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/stock" element={<StockOperations />} />
        </Route>
        <Route path="/login" element={<MainLogin />} />
        <Route path="*" element={<MainLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

