import logo from './logo.svg';
import './App.css';
import Nav from './Components/HomePage/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Hero from './Components/HomePage/Heropart/Hero';
import Addproducts from './Components/Add products/Addproducts';
import Home from './Components/HomePage/Home/Home';
import Login from './Components/Login/Login';
import Manages from './Components/Manages/Manages';
import Footer from './Footerpage/Footer';
import Require from './Require/Require';
import MyProducts from './Components/My products/MyProducts';
import { Toaster } from 'react-hot-toast';
import Details from './Components/ProductsDetails/Details';
import Blogs from './Blogs/Blogs';
import Notfound from './Notfound page/Notfound';
import Hair from './Components/Tips/Hair';
import Skin from './Components/Tips/Skin';



function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Toaster   position="top-right"
  reverseOrder={false}></Toaster>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/Add-products' element={ <Require> <Addproducts></Addproducts> </Require> } ></Route>
        <Route path='/Manage' element={ <Require> <Manages></Manages> </Require> } ></Route>
        <Route path='/My-products' element={ <Require> <MyProducts></MyProducts> </Require> } ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/My-products/:id' element={ <Require> <Details></Details> </Require> } ></Route>
        <Route path='/blog' element={ <Blogs></Blogs> } ></Route>
        <Route path='/hairtips' element={<Hair></Hair>} ></Route>
        <Route path='/skintips' element={<Skin></Skin>} ></Route>
        <Route path='*' element={<Notfound></Notfound>} ></Route>
      </Routes>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
