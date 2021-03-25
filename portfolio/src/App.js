import React from 'react';
import './Css/app.css';
import Navbar from './Components/Navbar';
import Home from './Contents/Home'
import Button from './Components/Button'

const App = () =>{
    return (
       <>
          <Navbar/>
          <Home/>
          <Button/>
       </>
    );
}
 export default App;