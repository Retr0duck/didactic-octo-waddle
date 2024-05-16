import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Contact from './Pages/Contact';
import LoginPage from './Pages/LoginPage'


function App() {
  return (
    <div>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<LoginPage/>} />
      </Routes>
      <Footer/>
    </Router>
   
</div>
  );
}

export default App;
