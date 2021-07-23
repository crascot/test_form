import React from 'react';
import { Container } from '@material-ui/core';
import Login from './login';
import Register from './register';
import Main from '../main/main';
import './form.scss';
import { HashRouter as Router, Route } from 'react-router-dom';


const Form = () => {
  return (
    <Router basename='/test_form'>
      <Container maxWidth='sm'>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/main' component={Main} />
      </Container>
    </Router>
  )
}

export default Form;