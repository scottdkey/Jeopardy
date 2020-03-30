import React from 'react';
import axios from 'axios'
import { Card, Button } from 'semantic-ui-react'
import Questions from './Questions'


export default class Cards extends React.Component {
 //cards need state?
  state = { 
    toggleForm:false,

  }

  //this should pull all our cards from the database
  componentDidMount() {
    console.log("mounted")
    axios.get('api/cards')
      .then(res =>{
        this.setState({
          cards = res.data
        })
      }).catch(err =>{
        console.log(err)
      })
  }

  //need to make an add card form elsewhere and render it here?
  addCard = () => {
    axios.post('api/cards', )
    .then(res => {
      console.log(res)
      this.setState({
        
      })
    })
    .catch(err => {
      console.log(err)
    })
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