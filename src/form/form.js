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

  const targetName = (event)  => setNickname(event.target.value)
  const targetEmail = (event) => setEmail(event.target.value)
  const targetPassword = (event) => setPassword(event.target.value)
  const targetConfirmPassword = (event) => setConfirmPassword(event.target.value)

  const checkName = error => text => {
    setErrorName(error)
    setHelperTextName(text)
  }
  const checkEmail = error => text => {
    setErrorEmail(error)
    setHelperTextEmail(text)
  }
  const checkPassword = error => text => {
    setErrorPassword(error)
    setHelperTextPassword(text)
  }
  const checkConfirmPassword = error => text => {
    setErrorConfirmPassword(error)
    setHelperTextConfirmPassword(text)
  }

  const clearType = () => {
    checkName()()
    checkEmail()()
    checkPassword()()
    checkConfirmPassword()()
  }
  const clear = () => {
    setNickname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <div style={{ margin: -8 }}>
      <BrowserRouter basename='/test_form'>
        <Switch>
          <Route path='/' exact>
            <Login
              nickname={nickname} targetName={targetName}
              password={password} targetPassword={targetPassword}
              disabled={disabled} setDisabled={setDisabled}
              errorName={errorName} errorPassword={errorPassword}
              helperTextName={helperTextName} helperTextPassword={helperTextPassword}
              checkName={checkName} checkPassword={checkPassword}
              clear={clear} clearType={clearType}
            />
          </Route>
          <Route path='/register'>
            <Register
              nickname={nickname} targetName={targetName}
              email={email} targetEmail={targetEmail}
              password={password} targetPassword={targetPassword}
              confirmPassword={confirmPassword} targetConfirmPassword={targetConfirmPassword}
              disabled={disabled} setDisabled={setDisabled}
              errorName={errorName} errorEmail={errorEmail}
              errorPassword={errorPassword} errorConfirmPassword={errorConfirmPassword}
              helperTextName={helperTextName} helperTextEmail={helperTextEmail}
              helperTextPassword={helperTextPassword} helperConfirmPassword={helperConfirmPassword}
              checkName={checkName} checkEmail={checkEmail}
              checkPassword={checkPassword} checkConfirmPassword={checkConfirmPassword}
              clear={clear} clearType={clearType}
            />
          </Route>
          <Route path='/feed'><Feed nickname={nickname} /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Form;