import React, { Component } from "react";
import { Card, Button} from "semantic-ui-react";
import axios from "axios";
import Category from "./category";
import CategoryForm from "./CategoryForm";
// import Cards from './cards'

class Categories extends Component {
  state = { categories: [], load: true, toggleForm: false};

  componentDidMount() {
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
  }

  addCategory = () => {};

  //finding by id in the database and returning everything in the state that doesn't match current id
  deleteCategory = id => {
    axios.delete(`/app/items/${id}`).then(res => {
      this.setState({
        items: this.state.items.filter(c => c.id !== id)
      });
    });
  };

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
  toggleForm = () => {
    this.setState({
      toggleForm: !this.state.toggleForm
    })
  };


  render() {
    const { categories, toggleForm } = this.state;
    return (
      <>
        <div id='categories'>
          <Card.Group itemsPerRow={5}>
            {categories.map(c => (
              <Card key={c.id}>
                <Category category={c} />
              </Card>
            ))}
          </Card.Group>
        </div>
        <div id="new">
          {toggleForm ? <CategoryForm toggleForm={this.toggleForm}/> : null}
          <Button onClick={() => this.toggleForm()}>
            {toggleForm ? "hide" : "new category"}
          </Button>
        </div>
      </>
    );
  }
}

export default Categories;
