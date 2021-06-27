import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Container, Button, Card, Typography, Grid, CircularProgress } from '@material-ui/core';
import Login from './login';
import Register from './register';
import './index.scss';

function renderRegister() {
  render(
    <Register />, document.getElementById('block')
  )
}

const Form = () => {
  return (
    <Container maxWidth='sm'>
      <Card className='form' style={{ padding: '10px' }}>
        <Grid container direction="row" justify="space-between">
          <Typography variant='h5'>Войти в систему</Typography>
          <CircularProgress id='loader' className='hide' />
          <Button className='register' onClick={renderRegister}>Зарегистриговаться</Button>
        </Grid>
        <Login />
        <span id='block' />
      </Card>
    </Container>
  )
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);