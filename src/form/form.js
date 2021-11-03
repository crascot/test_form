import React, { useState } from 'react';
import Login from './login';
import Register from './register';
import Feed from '../feed/feed';
import './form.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Form = () => {

  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [disabled, setDisabled] = useState(false)

  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)
  const [helperTextName, setHelperTextName] = useState('')
  const [helperTextEmail, setHelperTextEmail] = useState('')
  const [helperTextPassword, setHelperTextPassword] = useState('')
  const [helperConfirmPassword, setHelperTextConfirmPassword] = useState('')

  return (
    <div style={{ margin: -8 }}>
      <BrowserRouter basename='/test_form'>
        <Switch>
          <Route path='/' exact >
            <Login
              nickname={nickname} setNickname={setNickname}
              password={password} setPassword={setPassword}
              disabled={disabled} setDisabled={setDisabled}
              errorName={errorName} setErrorName={setErrorName}
              errorPassword={errorPassword} setErrorPassword={setErrorPassword}
              helperTextName={helperTextName} setHelperTextName={setHelperTextName}
              helperTextPassword={helperTextPassword} setHelperTextPassword={setHelperTextPassword}
            />
          </Route>
          <Route path='/register' >
            <Register
              nickname={nickname} setNickname={setNickname}
              email={email} setEmail={setEmail}
              password={password} setPassword={setPassword}
              confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
              disabled={disabled} setDisabled={setDisabled}
              errorName={errorName} setErrorName={setErrorName}
              errorEmail={errorEmail} setErrorEmail={setErrorEmail}
              errorPassword={errorPassword} setErrorPassword={setErrorPassword}
              errorConfirmPassword={errorConfirmPassword} setErrorConfirmPassword={setErrorConfirmPassword}
              helperTextName={helperTextName} setHelperTextName={setHelperTextName}
              helperTextEmail={helperTextEmail} setHelperTextEmail={setHelperTextEmail}
              helperTextPassword={helperTextPassword} setHelperTextPassword={setHelperTextPassword}
              helperConfirmPassword={helperConfirmPassword} setHelperTextConfirmPassword={setHelperTextConfirmPassword}
            />
          </Route>
          <Route path='/feed' component={Feed} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Form;