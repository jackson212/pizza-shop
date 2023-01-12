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
import ConfirmOrder from './components/cart/ConfirmOrder';
import PaymentSuccess from './components/cart/PaymentSuccess';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import MyOrders from './components/myorders/MyOrders';
function App() {
  return (
    <Router>
        <Header/>
        <Routes> 
           
           <Route path='/' element={<Home/>}/>
           <Route path='/Contact' element={<Contact/>}/>
           <Route path='/Cart' element={<Cart/>}/>
           <Route path='/Shipping' element={<Shipping/>}/>
           <Route path='/confirm' element={<ConfirmOrder/>}/>
           <Route path='/payment' element={<PaymentSuccess/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/profile' element={<Profile/>}/>
           <Route path='/myorders' element={<MyOrders/>}/>
           
           
        </Routes>
        <Footer/>

    </Router>
  );
}

export default App;
