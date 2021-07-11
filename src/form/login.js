import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import {
  Input,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  body: {
    margin: '20px 0',
    paddingTop: 20,
    borderTop: '3px solid #0dcaf0',
  },
  register: {
    '& *': {
      textDecoration: 'none',
      color: 'inherit',
    }
  },
  hide: {
    display: 'none',
    margin: 30,
  }
})

const Login = () => {

  const classes = useStyles()

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
          document.getElementById('loader').classList.remove(classes.hide)
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
        document.getElementById('loader').classList.add(classes.hide)
        render(
          <Container maxWidth='sm'>
            <Card className='form-register data'>
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
      <Grid className='form-register head' container direction="row" justify="space-between">
        <Typography variant='h5'>Войти в систему</Typography>
        <Typography variant='h5'>или</Typography>
        <Button onClick={Clear} className={classes.register} variant="outlined" color="primary"><Link to='/register'>Зарегистриговаться</Link></Button>
      </Grid>
      <Grid className={`form-register ${classes.body}`}>
        <Input value={nickname} onChange={targetName} type='text' placeholder='Введите имя' /> <hr width='0' />
        <Input value={password} onChange={targetPassword} type='password' placeholder='Введите пароль' /> <hr width='0' />
      </Grid>
      <Grid className='form-register footer' container direction="row" justify="space-between" alignItems="center">
        <Button id='login' size="small" variant="contained" onClick={Click} type='submit' >Войти</Button >
        <CircularProgress id='loader' className={`${classes.hide} visible`} />
        <Button onClick={Clear} >Очистить</Button>
      </Grid>
    </Card>
  )
}

export default Login;