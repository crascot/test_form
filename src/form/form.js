import React, { useState, useEffect } from 'react';
import Login from './login';
import Register from './register';
import Feed from '../feed/feed';
import './form.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { reg } from '../services/services';
import {
  showErrorName,
  showErrorEmail,
  showErrorPassword,
  showErrorConfirmPassword,
} from '../redux/features/form/formSlice';

const Form = () => {
  const [show, setShow] = useState(false)
  const [buttonStyle, setButtonStyle] = useState(0)
  const showPassword = () => {
    if (show === true) setShow(false)
    else setShow(true)
  }

  const dispatch = useDispatch()

  const loading = {
    click: useSelector(state => state.form.click),
    disabled: useSelector(state => state.form.disabled),
    redirect: useSelector(state => state.form.redirect),
    loader: useSelector(state => state.form.loader)
  }

  const formInputs = {
    nickname: useSelector(state => state.form.nickname),
    email: useSelector(state => state.form.email),
    password: useSelector(state => state.form.password),
    confirmPassword: useSelector(state => state.form.confirmPassword)
  }

  const errors = {
    errorName: useSelector(state => state.form.errorName),
    nameText: useSelector(state => state.form.nameText),
    errorEmail: useSelector(state => state.form.errorEmail),
    emailText: useSelector(state => state.form.emailText),
    errorPassword: useSelector(state => state.form.errorPassword),
    passwordText: useSelector(state => state.form.passwordText),
    errorConfirmPassword: useSelector(state => state.form.errorConfirmPassword),
    confirmPasswordText: useSelector(state => state.form.confirmPasswordText)
  }

  useEffect(() => {
    if (loading.click) {
      let name = formInputs.nickname.split('')
      let findNum = name.find((i) => Number(i))
      let showError = { type: true, text: '' }

      if (!formInputs.nickname) {
        showError.text = 'Некорректное имя'
        dispatch(showErrorName(showError))
      } else if (findNum) {
        showError.text = 'В имени не должны быть цифры'
        dispatch(showErrorName(showError))
      } else dispatch(showErrorName(''))

      if (!formInputs.email || !reg.test(formInputs.email)) {
        showError.text = 'Почта некорректна'
        dispatch(showErrorEmail(showError))
      } else dispatch(showErrorEmail(''))

      if (formInputs.password.length < 8) {
        showError.text = 'Пароль слишкой короткий'
        dispatch(showErrorPassword(showError))
        setButtonStyle(27)
      } else {
        dispatch(showErrorPassword(''))
        setButtonStyle()
      }
      if (formInputs.password !== formInputs.confirmPassword) {
        showError.text = 'Пароли не совпадают'
        dispatch(showErrorConfirmPassword(showError))
      } else dispatch(showErrorConfirmPassword(''))
    } else setButtonStyle()
  }, [loading.click, formInputs.nickname, formInputs.email, formInputs.password, formInputs.confirmPassword, dispatch])

  return (
    <div>
      <BrowserRouter basename='/test_form'>
        <Switch>
          <Route path='/' exact>
            <Login
              loading={loading} formInputs={formInputs} errors={errors}
              buttonStyle={buttonStyle} setButtonStyle={setButtonStyle}
              show={show} showPassword={showPassword}
            />
          </Route>
          <Route path='/register'>
            <Register
              loading={loading} formInputs={formInputs} errors={errors}
              show={show} showPassword={showPassword}
              buttonStyle={buttonStyle} setButtonStyle={setButtonStyle}
            />
          </Route>
          <Route path='/feed'><Feed /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Form;