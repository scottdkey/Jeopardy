import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

class CategoryForm extends Component {
  state = {
    id: null,
    name: ""
  };


  //setting the state of the form - if ID is present it will fill out info for edit
  componentDidMount(){
    if(this.props.category == null){
      this.setState({id: null, name: ''});
    } else {
      const { id, name } = this.props.category;
      this.setState({ id, name})
    }
  }

  //handleSubmit for this form will determine if there is a id present or not
  //if present it will update, if not it will create a new category
  handleSubmit = (e) => {
    e.preventDefault();
    const {id, name} = this.state
    const {toggleForm, editForm, reset} = this.props
    if (id === null) {
      axios
        .post("/api/categories", {
          name
        })
        .then(res => {
          console.log(res);
          this.setState({ name: "", id: null });
          toggleForm();
        });
    } else {
      const category = {...this.state}
      axios
      .patch(`/api/categories/${id}`, category)
      .then(res => {
        console.log(res);
        editForm();
        
      });
    }
    reset();
  };


  render() {
    const {name, id} = this.state
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            value={name}
            name="name"
            placeholder={id ? '' : 'enter a new category'}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
        </Form>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </>
    );
  }
}

export default CategoryForm;
