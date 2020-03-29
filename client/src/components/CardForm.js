import React from 'react';
import {Form, Header, Button, Container} from 'semantic-ui-react';
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
    name:'',
    points:'',
    answers:'',
  }

  componentDidMount(){
    console.log('mounted')
    axios.get('api/cards')
    .then(res => {

    })
    .catch(err => {

    })
  }

  handleChange = (e) => {
    // console.log(e)
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]:value
    })
  }

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
    const {category, name, points, answers, } = this.state
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
              name='name'
              placeholder='Card Question'
              value={name}
              onChange={this.handleChange}
            />
          </Form.Group>
            <p>Please Enter 4 Answers</p>
            <p>Choose One Answer as the Correct Response</p>
              <Form.Input
                width={12} 
                label='Answer 1'
                name='name'
                placeholder='Answer'
                value={answers}
                onChange={this.handleChange}
              />
              {/* needs some kind of radio button here  */}
              <Form.Input 
                width={12} 
                label='Answer 2'
                name='name'
                placeholder='Answer'
                value={answers}
                onChange={this.handleChange}
              />
              {/* needs some kind of radio button here  */}
              <Form.Input
                width={12} 
                label='Answer 3'
                name='name'
                placeholder='Answer'
                value={answers}
                onChange={this.handleChange}
              />
              {/* needs some kind of radio button here  */}
              <Form.Input 
                width={12} 
                label='Answer 4'
                name='name'
                placeholder='Answer'
                value={answers}
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