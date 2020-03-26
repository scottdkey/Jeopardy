import React from 'react';
import card from '/components/card';



export default class Cards extends React.Component {

  state = {}


  componentDidMount() {
    console.log("mounted")
    axios.get('api/cards')
      .then(res =>{
        this.setState({res.data})
      }).catch(err =>{
        console.log(err)
      })
  }

  addCard(){

  }

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