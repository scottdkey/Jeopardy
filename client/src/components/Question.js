import React, { Component } from 'react'
import {Card, Button} from 'semantic-ui-react'
import axios from 'axios';

class Question extends Component {
  state = {
    question: this.props.q,
    answers: [],
    correct: false,
    incorrect: false,
    showQuestion: false
  };

  componentDidMount(){
    const qID = this.state.question.id
    axios.get('/api/answers')
    .then(res =>{
      const answers = res.data.find(answers => {
        if(answers.card_id === qID){
          return answers
        }
      })
      this.setState({
        answers
      })
    }).catch(err =>{console.log(err)})
  }
  
  toggleQuestion(){
    this.setState({ showQuestion: !this.state.showQuestion})
  }
  questionContainer(){
    const { question, answers } = this.state;
    return (
    <>
        <Card.Content>
          <Card.Header>{question.name}</Card.Header>
        </Card.Content>
        <Card.Description>
            <Button color="orange">{answers.a}</Button>
            <Button color="green">{answers.b}</Button>
            <Button color="pink">{answers.c}</Button>
            <Button color="blue">{answers.d}</Button>
            {/* <Button>{answers.correct}</Button> */}
        </Card.Description>
      </>)
  }
  

  render() {
    const { showQuestion, question } = this.state;
    return (
      <>
        {showQuestion ? null : (
          <Button onClick={() => this.toggleQuestion()}>
            {question.points}
          </Button>
        )}
        {showQuestion ? this.questionContainer() : null}
      </>
    );
  }
}

export default Question