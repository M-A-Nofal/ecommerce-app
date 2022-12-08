
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
