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


  updateCategory = (id) => {
    console.log(id)
    axios.put(`/api/categories/${id}`).then(({ data }) => {
      const categores = this.state.categories.map(( c ) => {
        if (c.id === id) return data
        return data
      })
      this.setState({categores})
    })
  }
  categoryComplete = () =>{}
  toggleEdit = () => {}

  showCategories = () => {
      // this.state.categories 
    return(
      <>

      </>
    )
  }

  render() {
    const {categories} = this.state;
    return (
      <>
        <Card.Group itemsPerRow={5}>
          {categories.map(c => (
            <Card
              key={c.id}
              
            >
              {c.name}
            </Card>
          ))}
        </Card.Group>
      </>
    );
  }
}

export default Categories