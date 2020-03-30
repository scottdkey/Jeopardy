import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import axios from "axios";

class Question extends Component {
  state = {
    question: this.props.q,
    answers: [],
    correct: false,
    showQuestion: false
  };

  componentDidMount() {
    const qID = this.state.question.id;
    axios
      .get("/api/answers")
      .then(res => {
        const answers = res.data.find(answers => {
          if (answers.card_id === qID) {
            return answers;
          }
        });
        this.setState({
          answers
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleQuestion() {
    this.setState({ showQuestion: !this.state.showQuestion });
  }
  checkAnswer = answerTextValue => {
    const { points } = this.state.question;
    const { add, subtract } = this.props;
    if (answerTextValue === this.state.answers.correct) {
      add(points);
      this.complete();
      this.toggleQuestion();
    } else {
      subtract(points);
      this.complete();
      //tell the player they lost
      this.toggleQuestion();
    }
  };
  complete = () => {
    const { question } = this.state;
    let questionUpdate = { complete: (question.complete = true) };
    console.log(questionUpdate);
    axios
      .put(`/api/cards/${question.id}.${question}`)
      .then(data => {
        console.log(data);
        return;
      })
      .catch(err => {
        console.log(err);
      });
  };

  questionContainer() {
    const { question, answers } = this.state;
    return (
      <>
        <Card key={question.id}>
          <Card.Content>
            <Card.Header>{question.name}</Card.Header>
          </Card.Content>
          <Card.Description>
            <Button onClick={() => this.checkAnswer(answers.a)} color="orange">
              {answers.a}
            </Button>
            <Button onClick={() => this.checkAnswer(answers.b)} color="green">
              {answers.b}
            </Button>
            <Button onClick={() => this.checkAnswer(answers.c)} color="pink">
              {answers.c}
            </Button>
            <Button onClick={() => this.checkAnswer(answers.d)} color="blue">
              {answers.d}
            </Button>
            {/* <Button>{answers.correct}</Button> */}
          </Card.Description>
        </Card>
      </>
    );
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

export default Question;
