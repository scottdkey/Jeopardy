import React from 'react';
import axios from 'axios'
import { Card, Button } from 'semantic-ui-react'



export default class Questions extends React.Component {
 //cards need state?
  state = {
    questions: [],
    category: this.props.category

  }

 currentCategoryQuestions = (arrayOfAllQuestions, catID) => {
  const filtered = arrayOfAllQuestions.filter(q => {
    if(q.category_id === catID){

      return q
      
    }
  })
  return filtered
 }

  //this should pull all our cards from the database, currently has some syntax error I can't figure out
  componentDidMount() {
    
    const catID = this.props.category.id
    console.log(catID)
    axios.get('/api/cards')
      .then(res =>{
        const questions = this.currentCategoryQuestions(res.data, catID)
        console.log(questions)
        
        // this.setState({
          // res.data
        // })
      })
      // .catch(err =>{
        // console.log(err)
      // })
  }

  //need to make an add card form elsewhere and render it here?
  addCard(){

  }
  //attach a delete card button to each card, decide when to display it?
  deleteCard(){

  }





  render(){
    return(
      <Card>
        {/* { Cards.map( {category, card} =>  */}
        {/* )} */}
      </Card>
    )
  }
  

}