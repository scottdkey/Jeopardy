import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Categories from './Components/categories';
// import {Card} from 'semantic-ui-react'
import CardForm from './Components/CardForm'
import axios from 'axios';


class App extends Component {
  state = {
    total_points: 0
  };
  addPoints = (ammount)=> {
    let total_points = this.state.total_points + ammount
    this.setState({
      total_points
    })
    console.log(this.state.total_points)
  }
  subtractPoints = (ammount) => {
    this.setState({
      total_points: this.state.total_points - ammount
    });
  }

  render() {
    return (
      <div className="App">
        <Categories add={this.addPoints} subtract={this.subtractPoints} />
        <h1>you currently have {this.state.total_points} points</h1>
        <CardForm />
      </div>
    );
  }
}

export default App;
