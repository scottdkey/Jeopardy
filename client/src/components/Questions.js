import React from 'react';
import axios from 'axios'
import { Card, Button } from 'semantic-ui-react'
import Question from "./Question"



export default class Questions extends React.Component {
 //cards need state?
  state = {
    questions: [],
    category: this.props.category,
    
  }

 currentCategoryQuestions = (arrayOfAllQuestions, catID) => {
  const filtered = arrayOfAllQuestions.filter(q => {
    if (q.category_id === catID){
      return q
    }
  })
  return filtered
}



  //this should pull all our cards from the database, currently has some syntax error I can't figure out
  componentDidMount() {
    const catID = this.props.category.id
    axios.get('/api/cards')
      .then(res =>{
        const questions = this.currentCategoryQuestions(res.data, catID)
        this.setState({
          questions
        })
      })
      .catch(err =>{
        console.log(err)
      })
  }

  //need to make an add card form elsewhere and render it here?
  addQuestion(){

  }
  //attach a delete card button to each card, decide when to display it?
  deleteQuestion(){

  }
  





  render(){
    const {questions, showQuestion}= this.state
    return (
      <>
        {questions.map(question => (
          <Card key={question.id}>
            <Question q={question} />
          </Card>
        ))}
      </>
    );
  }
  

}