import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/public/Navbar';
import Main from './components/public/Main';
import Footer from './components/public/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
