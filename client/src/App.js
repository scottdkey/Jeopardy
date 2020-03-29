import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Categories from './Components/categories';
// import {Card} from 'semantic-ui-react'
import CardForm from './Components/CardForm'
import axios from 'axios';


class App extends Component {

  pullData = () => {
    axios
      .get("api/categories")
      .then(res => {
        this.setState({
          categories: res.data,
          load: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Categories pullData={this.pullData}/>
        <CardForm pullData={this.pullData}/>
      </div>
    );
  }
}

export default App;
