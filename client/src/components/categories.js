import React, { Component } from 'react';
import {Card, } from 'semantic-ui-react';
import axios from 'axios'


class Categories extends Component {
  state = { categories: [], load: true}

  componentDidMount() { 
    axios.get("api/categories").then( res => {
      this.setState({
        categories: res.data,
        load: false
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  addCategory = () => {
    
  }


  //finding by id in the database and returning everything in the state that doesn't match current id
  deleteCategory = (id) => {
    axios.delete(`/app/items/${id}`).then(res => {
      this.setState({
        items: this.state.items.filter(c => c.id !== id)
      })
    })
  }


  updateCategory = () => {}
  categoryComplete = () =>{}
  toggleEdit = () => {}

  getCategories = () => {}

  render() {
    return (
      <>
      <Card.Group itemsPerRow={5}>
        <Card>
        </Card>
      </Card.Group>
      </>
    )
  }
}

export default Categories