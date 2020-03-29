import React, { Component } from 'react'
import {Card} from 'semantic-ui-react'
import Axios from 'axios';

class Question extends Component {
  state = {
    question: this.props.q,
    answers: this.props.a
  };

  componentDidMount(){
    const qID = this.state.question.id
    Axios.get('/api/answers').then(res =>{
      const answers = res.data.filter(a => {
        if (qID === a.id){
          console.log(a)
          return a
        }

        })
     
    }).catch(err =>{})
  }
  currentQuestionsAnswers = () => {};
  answers = {};

  render() {
    const { question } = this.state;
    return (
      <>
        <Card.Header>{question.name}</Card.Header>
      </>
    );
  }
}

export default Question