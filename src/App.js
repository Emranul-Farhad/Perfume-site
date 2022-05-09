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


function App() {
  return (
    <div className="App">
      <Nav></Nav>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/Add-products' element={<Addproducts></Addproducts>} ></Route>
        <Route path='/Manage' element={<Manages></Manages>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
