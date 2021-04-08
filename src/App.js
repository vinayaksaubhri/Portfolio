import React from 'react';
import './Css/app.css';
import Navbar from './Components/Navbar';
import Home from './Contents/Home';
import Button from './Components/Button';
import About from './Contents/About';
import Contact from './Contents/Contact';
import Portfolio from './Contents/Portfolio';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

const App = () =>{
    return (   
    <>
    <Router>
      <Navbar/>
      <Button/>
      <Route path="/home" component={Home}></Route>
   </Router> 
   </>);
}
 export default App;