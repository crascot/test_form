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
    paddingBottom: 5,
    borderTop: '3px solid #0dcaf0',

    '& *': {
      width: '100%',
      marginTop: 10,
    },
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
  },
  success: {
    color: '#4caf50'
  }
})

const user = {
  nickname: 'test',
  password: 'password'
}

const Login = () => {

  const classes = useStyles()

  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  function targetName(event) {
    setNickname(event.target.value)
  }
  function targetPassword(event) {
    setPassword(event.target.value)
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
        resolve()
      }, 0)
    })
    promise
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (nickname !== user.nickname || password !== user.password) {
              render(
                <Container maxWidth='sm'>
                  <Card className='form-register data'>
                    <Typography variant="subtitle1" color="secondary">Ошибка, данного пользователя не существует</Typography>
                  </Card>
                </Container>
              )
            } else {
              render(
                <Container maxWidth='sm'>
                  <Card className='form-register data'>
                    <Typography variant="subtitle1" className={classes.success}>Вы успешно авторизировались</Typography >
                  </Card>
                </Container>
              )
              resolve(localStorage.setItem('AUTH_TOKEN', 'TOKEN_BODY'))
            }
            document.getElementById('login').style.pointerEvents = 'auto';
            document.getElementById('loader').classList.add(classes.hide);
          }, 3000);
        })
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
      <Grid className={`form-register ${classes.body}`} container>
        <Input value={nickname} onChange={targetName} type='text' placeholder='Введите имя' />
        <Input value={password} onChange={targetPassword} type='password' placeholder='Введите пароль' />
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