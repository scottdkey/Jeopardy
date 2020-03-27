import React from 'react';
import card from '/components/card';



export default class Cards extends React.Component {
 //cards need state?
  state = {}

  //this should pull all our cards from the database, currently has some syntax error I can't figure out
  componentDidMount() {
    console.log("mounted")
    axios.get('api/cards')
      .then(res =>{
        this.setState( {res.data} )
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





  render(){
    return(
      <Card.Group itemsPerRow={5}>
        { Cards.map( {category, card} =>
        <Card />
        )}
      </Card.Group>
    )
  }
  

}