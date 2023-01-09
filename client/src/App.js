import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './components/layout/Header'
import './styles/app.scss'
import './styles/contact.scss'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
function App() {
  return (
    <Router>
        <Header/>
        <Routes> 
           
           <Route path='/' element={<Home/>}/>
           <Route path='/Contact' element={<Contact/>}/>
           <Route path='/Cart' element={<Cart/>}/>
           <Route path='/Shipping' element={<Shipping/>}/>
           
        </Routes>
        <Footer/>

    </Router>
  );
}

export default App;
