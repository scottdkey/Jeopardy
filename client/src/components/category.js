import React, { Component } from "react";
import CategoryForm from "./CategoryForm";
import { Button } from "semantic-ui-react";

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
  }

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
          />
        ) : null}

        <Button color="purple" onClick={() => this.editForm()}>
          {editing ? "hide" : "edit"}
        </Button>
      </>
    );
  }
}

export default Category;
