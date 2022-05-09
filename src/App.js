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


function App() {
  return (
    <div className="App">
      <Nav></Nav>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/Add-products' element={ <Require> <Addproducts></Addproducts> </Require> } ></Route>
        <Route path='/Manage' element={ <Require> <Manages></Manages> </Require> } ></Route>
        <Route path='/My-products' element={ <Require> <MyProducts></MyProducts> </Require> } ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
