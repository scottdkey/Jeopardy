import React from 'react';
import {Form, Header, Button, Container, Radio} from 'semantic-ui-react';
import axios from 'axios';
import Categories from './categories';


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
    axios.get('api/cards')
    .then(res => {

    })
    .catch(err => {

    })
  }

  handleChange = (e, {name, value}) => {this.setState({[name]:value})}

  handleCorrectAnswer = (e, { value }) => this.setState({ value })

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('api/cards')
    .then(res => {

    })
    .catch(err => {

    })
  }

  pullData = () => {
    axios
      .get("api/categories")
      .then(res => {
        this.setState({
          categories: res.data,
          load: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  
  render(){
    const {category, question, points, answerA, answerB, answerC, answerD, value, correct} = this.state
    return(
      <>
      <Container>
        <Header>Create a New Card</Header>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Select
              // options={categorySelect} 
              width={6}
              label='Choose Category'
              name='category'
              placeholder=''
              value={category}
              onChange={this.handleChange}
            />
            <Form.Select 
              width={6}
              options={options}
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
            <Form.Group inline>
              <Form.Input
                width={12} 
                label='Answer A'
                name='answerA'
                placeholder='Answer A'
                value={answerA}
                onChange={this.handleChange}
              />
                <Form.Field
                  control={Radio}
                  label='Correct'
                  value='1'
                  checked={value === '1'}
                  onChange={this.handleCorrectAnswer}
                />
            </Form.Group>
            <Form.Group inline>
              <Form.Input 
                width={12} 
                label='Answer B'
                name='answerB'
                placeholder='Answer B'
                value={answerB}
                onChange={this.handleChange}
              />
              <Form.Field
                  control={Radio}
                  label='Correct'
                  value='2'
                  checked={value === '2'}
                  onChange={this.handleCorrectAnswer}
                />
            </Form.Group>
            <Form.Group inline>
              <Form.Input
                width={12} 
                label='Answer C'
                name='answerC'
                placeholder='Answer C'
                value={answerC}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label='Correct'
                value='3'
                checked={value === '3'}
                onChange={this.handleCorrectAnswer}
              />
            </Form.Group>
            <Form.Group inline>
              <Form.Input 
                width={12} 
                label='Answer D'
                name='answerD'
                placeholder='Answer D'
                value={answerD}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label='Correct'
                value='4'
                checked={value === '4'}
                onChange={this.handleCorrectAnswer}
              />
            </Form.Group>
            <Button color='blue'>Submit</Button>
          </Form>
        </Container>
      </>
    )
  }

}


const options = [
  { key: 'a', text: '100', value: 100 },
  { key: 'b', text: '200', value: 200 },
  { key: 'c', text: '300', value: 300 },
  { key: 'd', text: '400', value: 400 },
  { key: 'e', text: '500', value: 500 },
]

// const categorySelect = [
//   this.pullData()
// ]