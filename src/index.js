import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@material-ui/core';
import Login from './login';
import Register from './register';
import './index.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Form = () => {
  return (
    <Router>
      <Container maxWidth='sm'>
        <Route exact path='/test_form/login' component={Login} />
        <Route exact path='/test_form/register' component={Register} />
      </Container>
    </Router>
  )
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);