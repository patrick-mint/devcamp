import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./Pages/Footer";

function App() {
  return (
<Router>
  <nav>
    <Link to ="/"> Home</Link>
    <Link to ="/about"> About</Link>
    <Link to ="/contact"> Contact</Link>
    <Link to ="/portfolio"> Portfolio</Link>
  </nav>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="portfolio" element={<Portfolio/>}/>
    <Route path="*" element={<ErrorPage/>}/>
  </Routes>
  < Footer/>
</Router>
  )
}

export default App;
