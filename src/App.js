import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Services from './Pages/Services/Services';


function App() {
  return (
    <div>
      <div className='mx-12'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services></Services>} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
