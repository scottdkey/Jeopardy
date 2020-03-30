import React from 'react';
import {Form, Header, Button, Container, Radio} from 'semantic-ui-react';
import axios from 'axios';


//need a form on this page that allows a user to create new cards
//needs inputs for Category (drop down menu from pre-made list)
//needs inputs for Name (question on card), points that question is worth(drop down menu)
//and needs inputs for the 4 answers with a checkbox next to one that indicates it's the 'correct' choice
//form needs a toggle function cause we're gonna render it on the main page, have it hidden default

export default class CardForm extends React.Component{

  state={
    category: '',
    name:'',
    points:'',
    a:'',
    b:'', 
    c:'',
    d:'',
    correct:"",
    categoryOptions: [],
  }

  componentDidMount(){
    axios.get('api/categories')
    .then(res => {
      const categoryOptions = Array.from(new Set(
        res.data.map( (c, i)=>{
          return {value: c.id, key: i, text: c.name}
        })
      ))
      this.setState({categoryOptions})
    })
    .catch(err => {console.log(err)})
  }

  handleChange = (e, {name, value}) => {this.setState({[name]:value})}

  handleCorrectAnswer = (e, { value }) => {
    console.log(value);
    this.setState({ correct: value });
    
  }

  createQuestion(){
    const { name, points, category } = this.state;
    axios
      .post("/api/cards", {
        name,
        points,
        category_id: category
      })
      .then(res => {
        console.log(res.data.id)
        this.createAnswers(res.data.id)
        this.setState({
          question: "",
          points: "",
          complete: false,
        });
      })
      .catch(err => {
        console.log(err);
        console.log("in the err");
      });
  }

  createAnswers(card_id){
    const { a, b, c, d, correct} = this.state;
    console.log(card_id)
    axios
      .post("/api/answers", { 
        a, 
        b, 
        c, 
        d, 
        correct, 
        card_id
      })
      .then(res => {
        console.log(res);
        this.setState({
          a: "",
          b: "",
          c: "",
          d: "",
          correct: "",
          });
        })
        .catch(err => {
          console.log(err);
        });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.createQuestion()
  }

  getCategories = (id) => {
    axios
      .get("api/categories", id)
      .then(res => {
        this.setState({
          categories: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  
  render(){
    const {category, name, points, a, b, c, d, value, correct, categoryOptions} = this.state
    return(
      <>
      <Container>
        <Header>Create a New Card</Header>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Select
              options={categoryOptions}
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
            <Form.Group inline>
              <Form.Input
                width={12} 
                label='Answer A'
                name='a'
                placeholder='Answer A'
                value={a}
                onChange={this.handleChange}
              />
                <Form.Field
                  control={Radio}
                  label='Correct'
                  value={a}
                  checked={correct === a}
                  onChange={this.handleCorrectAnswer}
                />
            </Form.Group>
            <Form.Group inline>
              <Form.Input 
                width={12} 
                label='Answer B'
                name='b'
                placeholder='Answer B'
                value={b}
                onChange={this.handleChange}
              />
              <Form.Field
                  control={Radio}
                  label='Correct'
                  value={b}
                  checked={correct === b}
                  onChange={this.handleCorrectAnswer}
                />
            </Form.Group>
            <Form.Group inline>
              <Form.Input
                width={12} 
                label='Answer C'
                name='c'
                placeholder='Answer C'
                value={c}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label='Correct'
                value={c}
                checked={correct === c}
                onChange={this.handleCorrectAnswer}
              />
            </Form.Group>
            <Form.Group inline>
              <Form.Input 
                width={12} 
                label='Answer D'
                name='d'
                placeholder='Answer D'
                value={d}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                label='Correct'
                value={d}
                checked={correct === d}
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