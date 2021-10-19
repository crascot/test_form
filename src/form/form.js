import React from 'react';
import Login from './login';
import Register from './register';
import Feed from '../feed/feed';
import './form.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Form = () => {
  return (
    <div style={{ margin: -8 }}>
      <BrowserRouter basename='/test_form'>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/feed' component={Feed} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Form;