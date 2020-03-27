import React from 'react';
import {Form, Header, Button} from 'semantic-ui-react';


//need a form on this page that allows a user to create new cards
//needs inputs for Category (drop down menu from pre-made list)
//needs inputs for Name (question on card), points that question is worth(drop down menu)
//and needs inputs for the 4 answers with a checkbox next to one that indicates it's the 'correct' choice
//form needs a toggle function cause we're gonna render it on the main page, have it hidden default

export default class CardForm extends React.Component{

  state={
    category:'',
    name:'',
    points:'',
    answers:'',
    toggleForm:false,
  }

  componentDidMount(){
    console.log('mounted')
  }

  handleChange(e){
    console.log(e)
  }

  handleSubmit(e){
    console.log('clicked')
  }



  render(){
    const {category, name, points, answers} = this.state
    return(
      <>
        <Header>Create a New Card</Header>
        <Form.Group>
          <Form onSubmit={this.handleSubmit}>
            <Form.Select
              six wide
              label='Choose Category'
              name='category'
              placeholder=''
              value={category}
              onChange={this.handleChange}
            />
            <Form.Select 
              label='Point Value'
              name='points'
              placeholder='Select Point Value'
              value={points}
              onChange={this.handleChange}
            />
            <Form.Input 
              label='Card Question'
              name='name'
              placeholder='Card Question'
              value={name}
              onChange={this.handleChange}
            />
            <p>Please Enter 4 Answers</p>
            <p>Choose One Answer as the Correct Response</p>
            <Form.Input 
              label='Answers'
              name='name'
              placeholder='Answer'
              value={answers}
              onChange={this.handleChange}
            />
            <Form.Input 
              label='Answers'
              name='name'
              placeholder='Answer'
              value={answers}
              onChange={this.handleChange}
            />
            <Form.Input 
              label='Answers'
              name='name'
              placeholder='Answer'
              value={answers}
              onChange={this.handleChange}
            />
            <Form.Input 
              label='Answers'
              name='name'
              placeholder='Answer'
              value={answers}
              onChange={this.handleChange}
            />
            <Button color='blue'>Submit</Button>
          </Form>
        </Form.Group>
      </>
    )
  }

}