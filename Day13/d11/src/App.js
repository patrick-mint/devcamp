import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Portfolio from './Portfolio';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <hr />
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav style={{textAlign: "center" }}>
          <Link to="/">Home</Link> | 
          <Link to="/portfolio">Portfolio</Link> | 
          <Link to="/about">About Us</Link> | 
          <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return <p>404 Not Found</p>;
}


export default App;
