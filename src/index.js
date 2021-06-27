import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Container, Button, Card } from '@material-ui/core';
import Login from './login';
import Register from './register';

function renderLogin() {
  render(
    <Login />, document.getElementById('block')
  )
}

function renderRegister() {
  render(
    <Register />, document.getElementById('block')
  )
}

const Form = () => {
  return (
    <Container maxWidth="sm">
      <Card style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={renderLogin}>Войти</Button>
        <Button onClick={renderRegister}>Зарегистриговаться</Button>
      </Card>

      <Card id='block' />
    </Container>
  )
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);