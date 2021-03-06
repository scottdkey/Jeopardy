import React from 'react';
import axios from 'axios'
import Question from "./Question"



export default class Questions extends React.Component {
 //cards need state?
  state = {
    questions: [],
    category: this.props.category,
  }

 currentCategoryQuestions(arrayOfAllQuestions, catID){
  const filtered = arrayOfAllQuestions.filter(q => {
    if (q.category_id === catID){
      return q
    }
  })
  return filtered
}



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
    const {questions}= this.state
    return (
      <>
        {questions.map(question => (
            <Question
              id={question.id}
              q={question}
              {...this.props}
            />
        ))}
      </>
    );
  }
  

}