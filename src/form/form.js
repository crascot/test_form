import React from 'react';
import { Container } from '@material-ui/core';
import Login from './login';
import Register from './register';
import Main from '../main/main';
import './form.scss';
import { HashRouter as Router, Route } from 'react-router-dom';


const Form = () => {
  return (
    <Container maxWidth='sm'>
      <Router basename='/test_form'>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/main' component={Main} />
      </Router>
    </Container>
  )
}

export default Form;