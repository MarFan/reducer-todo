import React, { useReducer } from 'react';

import {reducer, initialState} from './reducers/todoReducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { Container, Header } from 'semantic-ui-react'

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState);

  return (
    <Container className="App">
      <Header as="h2" dividing>Start your Todos!</Header>
      <TodoForm addTask={dispatch} />
      <TodoList todoItems={todoState} completeTask={dispatch} />
    </Container>
  );
}

export default App;
