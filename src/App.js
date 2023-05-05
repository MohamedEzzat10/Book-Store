import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import Footer from './components/footer/Footer';
import Home from './components/pages/Home';
import Book from './components/pages/Book/Book';
import Cart from './components/pages/cart/Cart';
import Authors from './components/pages/authors/Authors';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';

function App() {
  return (
 <>
 <BrowserRouter>
 <Header/>
 <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/authors' element={<Authors/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/contact' element={<Contact/>}/>
 <Route path='/book/:id' element={<Book/>}/>
 <Route path='/cart' element={<Cart/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/register' element={<Register/>}/>




 </Routes>
 
 <Footer/>
 </BrowserRouter>
 </>
  );
}

export default App;
