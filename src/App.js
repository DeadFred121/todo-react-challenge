import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import toDos from './data';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import ToDoList from './components/todo-list';

const Heading = (props) => (
  <div className="heading">
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="container">
        <Heading title="My Todo list" subtitle="Things I need to get done!" />
        <ToDoList tasks={toDos}/>
      </div >
    );
  }
}

export default App;
