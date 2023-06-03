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
  const dispatch = useDispatch()

  const [show, setShow] = useState(false)
  const [buttonStyle, setButtonStyle] = useState(0)
  
  const showPassword = () => setShow(!show)
  const form = useSelector(state => state.form)

  const showError = (type) => (text) => {
    return {
      type: type,
      text: text
    }
  }

  useEffect(() => {
    if (form.click) {
      let name = form.nickname.split('')
      let findNum = name.find((i) => Number(i))

      if (!form.nickname) dispatch(showErrorName(showError(true)('Некорректное имя')))
      else if (findNum) dispatch(showErrorName(showError(true)('В имени не должны быть цифры')))
      else dispatch(showErrorName(''))

      if (!form.email || !reg.test(form.email)) dispatch(showErrorEmail(showError(true)('Почта некорректна')))
      else dispatch(showErrorEmail(''))

      if (form.password.length < 8) {
        dispatch(showErrorPassword(showError(true)('Пароль слишкой короткий')))
        setButtonStyle(27)
      } else {
        dispatch(showErrorPassword(''))
        setButtonStyle()
      }
      if (form.password !== form.confirmPassword) dispatch(showErrorConfirmPassword(showError(true)('Пароли не совпадают')))
      else dispatch(showErrorConfirmPassword(''))
    } else setButtonStyle()
  }, [form.click, form.nickname, form.email, form.password, form.confirmPassword, dispatch])

  return (
    <div>
      <BrowserRouter basename='/test_form'>
        <Switch>
          <Route path='/' exact>
            <Login
              form={form} show={show} showPassword={showPassword}
              buttonStyle={buttonStyle}
            />
          </Route>
          <Route path='/register'>
            <Register
              form={form} show={show} showPassword={showPassword}
              buttonStyle={buttonStyle}
            />
          </Route>
          <Route path='/feed'><Feed /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Form;