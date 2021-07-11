import React, { useReducer } from 'react';

import {reducer, initialState} from './reducers/todoReducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { Container, Grid, Header } from 'semantic-ui-react'

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState);

  return (
    <Container className="App">
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as="h2" dividing>Start your Todos!</Header>
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={6}>
            <TodoForm addTask={dispatch} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={6}>
            <TodoList todoItems={todoState} completeTask={dispatch} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
