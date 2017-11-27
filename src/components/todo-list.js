import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const ToDoList = ({ tasks }) => (
  <ListGroup>
    {tasks.map(item => {
      if (!item.complete) {
        return <ListGroupItem key={item.id}> {item.task}: {item.complete}</ListGroupItem>
      } else {
        return <ListGroupItem key={item.id}> {item.task}: <Badge color="success" pill>Complete!</Badge></ListGroupItem>
      }
    }
    )}
  </ListGroup>
)

export default ToDoList;