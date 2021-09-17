import React from 'react';
import { Container } from '@material-ui/core';
import Login from './login';
import Register from './register';
import Feed from '../feed/feed';
import './form.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Form = () => {
  return (
    <Container>
      <Router basename='/test_form'>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/feed' component={Feed} />
      </Router>
    </Container>
  )
}

export default Form;