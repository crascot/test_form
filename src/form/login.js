import React, { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  Typography,
  Card,
  CircularProgress,
  TextField
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { User } from '../users/user';
import { useStyles } from './styles/styles';


const Login = () => {

  const classes = useStyles()

  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  const [disabled, setDisabled] = useState(false)
  const [hide, setHide] = useState(classes.hide)

  function targetName(event) {
    setNickname(event.target.value)
  }
  function targetPassword(event) {
    setPassword(event.target.value)
  }

  function Click() {
    let promise = new Promise((resolve, reject) => {
      if (!nickname) {
        reject(alert('Пожалуйста введите ваше имя'))
      } else if (+nickname) {
        reject(alert('Имя не может состоять из цифр'))
      } else if (!password) {
        reject(alert('Введите пароль'))
      } else if (password.length < 8) {
        reject(alert('Этот пароль слишкой короткий'))
      } else {
        setDisabled(true)
        setHide()
      }
      resolve()
    })
    promise
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout((user) => {
            if (nickname !== User.name) {
              reject(alert('Пользователя с данным именем не существует'))
            } else if (password !== User.password) {
              reject(alert('Неправильный пароль'))
            } else {
              alert('Добро пожаловать')
            }
            setDisabled(false)
            setHide(classes.hide)
          }, 3000);
        })
      })
  }

  function Clear() {
    localStorage.clear()

    setNickname('');
    setPassword('');
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
        <Button className={classes.register} disabled={disabled} variant="outlined" color="primary"><Link to='/register'>Зарегистриговаться</Link></Button>
      </Grid>
      <Grid className={`form-register ${classes.body}`} container>
        <TextField id="standard-basic" label="Введите имя" value={nickname} onChange={targetName} type='text' />
        <TextField id="standard-basic" label="Введите пароль" value={password} onChange={targetPassword} type='password' />
      </Grid>
      <Grid className='form-register footer' container direction="row" justify="space-between" alignItems="center">
        <Button id='login' size="small" disabled={disabled} variant="contained" onClick={Click} type='submit'>Войти</Button>
        <CircularProgress id='loader' className={hide} />
        <Button onClick={Clear} type='submit' disabled={disabled} >Очистить</Button>
      </Grid>
    </Card>
  )
}

export default Login;