import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header' ;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='display1'>Titulo con bootstrap</h1>
         <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <Navbar/> 
          <Header/>{/* En el header se encuentran las tareas y por ende el formulario 
          para crearlas.*/}

      </div>
    );
  }
}

export default App;
