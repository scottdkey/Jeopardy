import React from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './components/categories';
import {Card} from 'semantic-ui-react'


function App() {
  return (
    <div className="App">
      <Card.Group itemsPerRow={5}>
        <Categories />
      </Card.Group>
    </div>
  );
}

export default App;
