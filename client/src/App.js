import React from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './Components/categories';
import {Card} from 'semantic-ui-react'
import CardForm from './Components/CardForm'


function App() {
  return (
    <div className="App">
      <Card.Group itemsPerRow={5}>
        <Categories />
      </Card.Group>
      <CardForm />
    </div>
  );
}

export default App;
