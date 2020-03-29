import React from 'react';
import axios from 'axios'
import { Card, Button } from 'semantic-ui-react'
import Card from './Components/card'



export default class Cards extends React.Component {
 //cards need state?
  state = {}

  //this should pull all our cards from the database, currently has some syntax error I can't figure out
  componentDidMount() {
    console.log("mounted")
    axios.get('api/cards')
      .then(res =>{
        this.setState({
          // res.data
        })
      }).catch(err =>{
        console.log(err)
      })
  }

  //need to make an add card form elsewhere and render it here?
  addCard(){

  }
  //attach a delete card button to each card, decide when to display it?
  deleteCard(){

  }

  toggleForm = () => {
    this.setState({
      toggleForm: !this.state.toggleForm
    });
  };



  render(){
    return(
      <>
        <Card.Group itemsPerRow={5}>
          {/* { Cards.map( {category, card} =>  */}
          <Card />
          {/* )} */}
        </Card.Group>
        <div>
          {toggleForm ? ( <CardForm reset={this.pullData} toggleForm={this.toggleForm} /> ) : null}
          <Button onClick={() => this.toggleForm()}>
            {toggleForm ? "hide" : "New Card"}
          </Button>
        </div>
      </>
    )
  }
  

}