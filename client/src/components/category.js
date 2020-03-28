import React, { Component } from "react";
import CategoryForm from "./CategoryForm";
import { Button } from "semantic-ui-react";
import axios from 'axios'

class Category extends Component {
  state = {
    editing: false,
    category: this.props.category
  };
  editForm = () => {
    this.setState({ editing: !this.state.editing });
  };
  updateCategories = () => {
    //need some logic to update everything
  };

  toggleComplete = () => {
    //when all of the questions are finished
  };

  

  render() {
    const { editing, category } = this.state;
    return (
      <>
        {category.name}
        {editing ? (
          <CategoryForm
            category={category}
            editForm={this.editForm}
            reset={this.props.reset}
          />
        ) : null}

        <Button color="purple" onClick={() => this.editForm()}>
          {editing ? "hide" : "edit"}
        </Button>
        <Button color="red" onClick={() => this.props.delete(category.id)}>
          delete
        </Button>
      </>
    );
  }
}

export default Category;
