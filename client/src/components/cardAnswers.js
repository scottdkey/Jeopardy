import React, { Component } from 'react';
import {Card, Button, } from 'semantic-ui-react';




const CardAnswers = (card, answers) => {


  return (
    <Card key={card.id}>
      <Card.Content>
        <Card.Meta>{card.name}</Card.Meta>
        <Card.Description>
          <div> {answers} </div>
        </Card.Description>
      </Card.Content>
      <Card.Button>Delete</Card.Button>
    </Card>
  );
}

export default CardAnswers;