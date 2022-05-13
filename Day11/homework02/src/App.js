import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail";
import WarehouseProductDetail from "./Pages/WarehouseProductDetail";
import Contact from "./Pages/Contact";
import Warehouse from "./Pages/Warehouse";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";


function App() {
  return (
<Router>
  <Navbar/>

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="shop/:id" element={<ProductDetail />} />
    <Route path="warehouselocation" element={<Warehouse/>}/>
    <Route path="warehouselocation/:id" element={<WarehouseProductDetail />} />
    <Route path="contact" element={<Contact/>}/>
    <Route path="*" element={<ErrorPage/>}/>
  </Routes>

  < Footer/>
</Router>
  )
}

export default App;
