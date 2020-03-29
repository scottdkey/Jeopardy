import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Categories from './Components/categories';
// import {Card} from 'semantic-ui-react'
import CardForm from './Components/CardForm'
import axios from 'axios';


function App() {
  return (
    <div className="App">
        <Categories />
        <CardForm />
    </div>
  );
}

export default App;
