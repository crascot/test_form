import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const Form = () => {

  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function targetName(event) {
    setNickname(event.target.value)
    localStorage.setItem('nickname', event.target.value)
  }
  function targetEmail(event) {
    setEmail(event.target.value)
    localStorage.setItem('email', event.target.value)
  }
  function targetPassword(event) {
    setPassword(event.target.value)
    localStorage.setItem('password', event.target.value)
  }
  function targetConfirmPassword(event) {
    setConfirmPassword(event.target.value)
    localStorage.setItem('confirmPassword', event.target.value)
  }

  function Click() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!nickname) {
      alert('Пожалуйста введите ваше имя');
    } else if (+nickname) {
      alert('Имя не может состоять из цифр')
    } else if (!email) {
      alert('Введите почту')
    } else if (!reg.test(email)) {
      alert('Почта некорректна')
    } else if (!password) {
      alert('Введите пароль')
    } else if (password.length < 8) {
      alert('Этот пароль слишкой короткий')
    } else if (password !== confirmPassword) {
      alert('Пароли не совпадают')
    }

    else {
      render(
        <div>
          <p>Ваше имя: {localStorage.getItem('nickname')}</p>
          <p>Ваша почта: {localStorage.getItem('email')}</p>
          <p>Ваш пароль: {localStorage.getItem('password')}</p>
        </div>
      )
      localStorage.clear()
    }
  }

  useEffect(() => {
    setNickname(localStorage.getItem('nickname'))
    setEmail(localStorage.getItem('email'))
    setPassword(localStorage.getItem('password'))
    setConfirmPassword(localStorage.getItem('confirmPassword'))
  }, [])

  return (
    <div>
      <input value={nickname} onChange={targetName} type='text' placeholder='Введите имя' /> <hr width='0' />
      <input value={email} onChange={targetEmail} type='email' placeholder='Введите email' /> <hr width='0' />
      <input value={password} onChange={targetPassword} type='password' placeholder='Введите пароль' /> <hr width='0' />
      <input value={confirmPassword} onChange={targetConfirmPassword} type='password' placeholder='Подтвердите пароль' /> <hr width='0' />
      <input onClick={Click} type='submit' />
      <button onClick={() => localStorage.clear()} >Очистить</button>
    </div>
  )
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);