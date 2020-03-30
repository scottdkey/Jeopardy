import React, { Component } from "react";
import CategoryForm from "./CategoryForm";
import { Button } from "semantic-ui-react";
import Questions from './Questions'

class Category extends Component {
  state = {
    editing: false,
    category: this.props.category
  };


  //toggle CategoryForm for editing purposes
  toggleEditForm = () => {
    this.setState({ editing: !this.state.editing });
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

        <Button color="purple" onClick={() => this.toggleEditForm()}>
          {editing ? "hide" : "edit"}
        </Button>
        <Button color="red" onClick={() => this.props.delete(category.id)}>
          delete
        </Button>
        <Questions
          {...this.props}
        />
      </>
    );
  }
}

export default Category;
