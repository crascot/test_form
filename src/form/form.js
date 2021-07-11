import React from 'react';
import { Container } from '@material-ui/core';
import Login from './login';
import Register from './register';
import './form.scss';
import { HashRouter as Router, Route } from 'react-router-dom';


const Form = () => {
  return (
    <Router basename='/test_form'>
      <Container maxWidth='sm'>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
      </Container>
    </Router>
  )
}

export default Form;