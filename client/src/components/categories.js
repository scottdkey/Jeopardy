import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import axios from "axios";
import Category from "./category";
import CategoryForm from "./CategoryForm";
// import Cards from './cards'

class Categories extends Component {
  state = { categories: [], load: true, toggleForm: false };

  componentDidMount() {
    this.pullData();
  }

  //sepreate pull data function to be able to reset the state of the page
  //reusing it in the component did mount
  pullData = () => {
      axios
        .get("api/categories")
        .then(res => {
          this.setState({
            categories: res.data,
            load: false
          });
        })
        .catch(err => {
          console.log(err);
        });
    };
  

  //finding by id in the database and returning everything in the state that doesn't match current id
  deleteCategory = id => {
    axios.delete(`/api/categories/${id}`).then(res => {
      this.setState({
        categories: this.state.categories.filter(c => c.id !== id)
      });
    });
  };

  //axios call to update
  updateCategory = id => {
    console.log(id);
    axios.put(`/api/categories/${id}`).then(({ data }) => {
      const categores = this.state.categories.map(c => {
        if (c.id === id) return data;
        return data;
      });
      this.setState({ categores });
    });
  };

  //form toggle for the create new category
  toggleForm = () => {
    this.setState({
      toggleForm: !this.state.toggleForm
    });
  };

  render() {
    const { categories, toggleForm } = this.state;
    return (
      <>
        <div id="categories">
          <Card.Group itemsPerRow={5}>
            {categories.map(c => (
              <Card key={c.id}>
                <Category
                  {...this.props}
                  delete={this.deleteCategory}
                  reset={this.pullData}
                  category={c}
                />
              </Card>
            ))}
          </Card.Group>
        </div>
        <div id="new">
          {toggleForm ? (
            <CategoryForm reset={this.pullData} toggleForm={this.toggleForm} />
          ) : null}
          <Button onClick={() => this.toggleForm()}>
            {toggleForm ? "hide" : "new category"}
          </Button>
        </div>
      </>
    );
  }
}

export default Categories;
