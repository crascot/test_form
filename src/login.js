import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Input, Button, Card } from '@material-ui/core';


const Login = () => {

  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  function targetName(event) {
    setNickname(event.target.value)
    localStorage.setItem('nickname', event.target.value)
  }
  function targetPassword(event) {
    setPassword(event.target.value)
    localStorage.setItem('password', event.target.value)
  }

  function Click() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!nickname) {
          reject(alert('Пожалуйста введите ваше имя'))
        } else if (+nickname) {
          reject(alert('Имя не может состоять из цифр'))
        } else if (!password) {
          reject(alert('Введите пароль'))
        } else if (password.length < 8) {
          reject(alert('Этот пароль слишкой короткий'))
        }
        setTimeout(() => {
          const loginData = [
            localStorage.getItem('nickname'),
            localStorage.getItem('password')
          ]
          resolve(loginData)
        }, 1000)
      }, 0)
    })
    promise
      .then(data => render(
        <Card>
          <p>Ваше имя: {data[0]}</p>
          <p>Ваш пароль: {data[1]}</p>
        </Card>
      ))
  }

  useEffect(() => {
    setNickname(localStorage.getItem('nickname'))
    setPassword(localStorage.getItem('password'))
  }, [])

  return (
    <Card maxWidth="sm" style={{padding: '10px'}}>
      <Input value={nickname} onChange={targetName} type='text' placeholder='Введите имя' /> <hr width='0' />
      <Input value={password} onChange={targetPassword} type='password' placeholder='Введите пароль' /> <hr width='0' />
      <Button size="small" variant="contained" onClick={Click} type='submit' >Войти</Button >
      <Button onClick={() => localStorage.clear()} >Очистить</Button>
    </Card>
  )
}

export default Login;