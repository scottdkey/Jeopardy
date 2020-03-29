import React from 'react';
import {Form, Header, Button, Container} from 'semantic-ui-react';


//need a form on this page that allows a user to create new cards
//needs inputs for Category (drop down menu from pre-made list)
//needs inputs for Name (question on card), points that question is worth(drop down menu)
//and needs inputs for the 4 answers with a checkbox next to one that indicates it's the 'correct' choice
//form needs a toggle function cause we're gonna render it on the main page, have it hidden default

export default class CardForm extends React.Component{

  state={
    category:'',
    question:'',
    points:'',
    answerA:'',
    answerB:'', 
    answerC: '',
    answerD:'',
    correct:"",
    toggleForm:false,
  }

  componentDidMount(){
    console.log('mounted')
    //honestly not sure what may or may not need to be here
  }

  handleChange = (e, {name, value}) => {this.setState({[name]:value})}

  handleSubmit = (e) => {
    console.log('clicked')
    //where should this submit to axios-wise? Not sure how we'll make adding new ones work
  }

  toggleForm = () => {
    //needs to be built out and needs a button somewhere
  }



  render(){
    const {category, question, points, answerA, answerB, answerC, answerD, correct} = this.state
    return(
      <>
      <Container>
        <Header>Create a New Card</Header>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Select
              // option value={Categories} something like this right here to render pre-made categories?
              width={6}
              label='Choose Category'
              name='category'
              placeholder=''
              value={category}
              onChange={this.handleChange}
            />
            <Form.Select 
            width={6}
              label='Point Value'
              name='points'
              placeholder='Select Point Value'
              value={points}
              onChange={this.handleChange}
            />
            <Form.Input
              width={6} 
              label='Card Question'
              name='question'
              placeholder='Card Question'
              value={question}
              onChange={this.handleChange}
            />
          </Form.Group>
            <p>Please Enter 4 Answers</p>
            <p>Choose One Answer as the Correct Response</p>
            <Form.Input
              width={12} 
              label='Answer A'
              name='answerA'
              placeholder='AnswerA'
              value={answerA}
              onChange={this.handleChange}
            />
            {/* needs some kind of radio button here  */}
            <Form.Input 
              width={12} 
              label='AnswersB'
              name='answerB'
              placeholder='AnswerB'
              value={answerB}
              onChange={this.handleChange}
            />
            {/* needs some kind of radio button here  */}
            <Form.Input
              width={12} 
              label='Answers C'
              name='answerC'
              placeholder='Answer'
              value={answerC}
              onChange={this.handleChange}
            />
            {/* needs some kind of radio button here  */}
            <Form.Input 
              width={12} 
              label='Answers D'
              name='answerD'
              placeholder='Answer'
              value={answerD}
              onChange={this.handleChange}
            />
            {/* needs some kind of radio button here  */}
            <Button color='blue'>Submit</Button>
          </Form>
        </Container>
      </>
    )
  }

}
