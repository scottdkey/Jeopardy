import React from 'react';
import {Card, Button, } from 'semantic-ui-react';

const Card = () => {
  return(
    <Card key={card.id}>
      <Card.Content>
        <Card.Meta>
          {card.name}
        </Card.Meta>
        <Card.Description>
          {card.answers}
        </Card.Description>
      </Card.Content>
      <Card.Button>Delete</Card.Button>
    </Card>
  )
}

export default Card;