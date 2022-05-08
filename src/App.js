import logo from './logo.svg';
import './App.css';
import Nav from './Components/HomePage/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Hero from './Components/HomePage/Heropart/Hero';

function App() {
  return (
    <div className="App">
     <Nav></Nav>
     {/* <Hero></Hero> */}
   
    </div>
  );
}

export default App;
