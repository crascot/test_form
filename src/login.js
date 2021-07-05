import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import { Input, Button, Container, Grid, Typography, Card, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';


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
        } else {
          document.getElementById('login').style.pointerEvents = 'none';
          document.getElementById('loader').classList.remove('hide')
        }
        setTimeout(() => {
          const loginData = [
            localStorage.getItem('nickname'),
            localStorage.getItem('password')
          ]
          resolve(loginData)
        }, 3000);
      }, 0)
    })
    promise
      .then(data => {
        document.getElementById('loader').classList.add('hide')
        render(
          <Container maxWidth='sm'>
            <Card>
              <Typography variant="subtitle1">Ваше имя: {data[0]}</Typography >
              <Typography variant="subtitle1">Ваш пароль: {data[1]}</Typography >
            </Card>
          </Container>
        )
      })
  }

  function Clear() {
    localStorage.clear()

    setNickname('');
    setPassword('')
  }

  useEffect(() => {
    setNickname(localStorage.getItem('nickname'))
    setPassword(localStorage.getItem('password'))
  }, [])

  return (
    <Card className='form'>
      <Grid className='form-register' container direction="row" justify="space-between">
        <Typography variant='h5'>Войти в систему</Typography>
        <CircularProgress id='loader' className='hide' />
        <Button className='register'><Link to='/register'>Зарегистриговаться</Link></Button>
      </Grid>
      <Grid className='form-register'>
        <Input value={nickname} onChange={targetName} type='text' placeholder='Введите имя' /> <hr width='0' />
        <Input value={password} onChange={targetPassword} type='password' placeholder='Введите пароль' /> <hr width='0' />
      </Grid>
      <Grid className='form-register' container direction="row" justify="space-between">
        <Button id='login' size="small" variant="contained" onClick={Click} type='submit' >Войти</Button >
        <Button onClick={Clear} >Очистить</Button>
      </Grid>
    </Card>
  )
}

export default Login;