import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

class CategoryForm extends Component {
  state = {
    id: null,
    name: ""
  };

  componentDidMount(){
    if(this.props.category == null){
      this.setState({id: null, name: ''});
    } else {
      const { id, name } = this.props.category;
      this.setState({ id, name})
    }
  }

  handleSubmit = (e) => {
    
    e.preventDefault();
    const {id, name} = this.state
    const {toggleForm, editForm} = this.props
    if (id === null) {
      axios
        .post("/api/categories", {
          name
        })
        .then(res => {
          console.log(res);
          this.setState({ name: "", id: null });
          toggleForm();
          // resetPage();
        });
    } else {
      const category = {...this.state}
      console.log(category)
      axios
      .patch(`/api/categories/${id}`, category)
      .then(res => {
        console.log(res);
        editForm();
      });
    }
  };


  render() {
    const {name} = this.state
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            value={name}
            name="name"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
        </Form>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </>
    );
  }
}

export default CategoryForm;
