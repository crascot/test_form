import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@material-ui/core';
import Login from './login';
import Register from './register';
import './index.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';


const Form = () => {
  return (
    <Router>
      <Container maxWidth='sm'>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
      </Container>
    </Router>
  )
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);