import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/layout/Header';
import Home from './component/Home';
import Footer from './component/layout/Footer';
import Menu from './component/Menu';
import About from './component/About';
import ContactUs from './component/ContactUs';


function App() {
  return (
    
      <div>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/Menu' element = {<Menu/>} />
        <Route path='/About' element = {<About/>} />
        <Route path='/Contactus' element = {<ContactUs/>} />
      </Routes>
      <Footer/>
      </div>
    
  );
}

export default App;
