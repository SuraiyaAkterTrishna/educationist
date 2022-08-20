import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Services from './Pages/Services/Services';
import Reviews from './Pages/Reviews/Reviews';
import Policy from './Pages/Policy/Policy';


function App() {
  return (
    <div>
      <div className='mx-12'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={
          <RequireAuth>
            <Services></Services>
          </RequireAuth>
        }/>
          <Route path="/reviews" element={<Reviews></Reviews>} />
          <Route path="/policy" element={<Policy/>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<SignUp></SignUp>}/>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
