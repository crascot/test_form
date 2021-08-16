import React, { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  Typography,
  Card,
  CircularProgress,
  TextField
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { useStyles } from './styles/styles';


const Login = () => {

  const classes = useStyles()

  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  const [disabled, setDisabled] = useState(false)
  const [hide, setHide] = useState(classes.hide)

  const [redirect, setRedirect] = useState('')

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
          setTimeout(() => {
            let DB = JSON.parse(localStorage.getItem('database'))
            DB.users.forEach(user => {
              if (user.name === nickname && user.password === password) {
                resolve(alert('Добро пожаловать'))
              } else {
                reject(alert('Данного пользователя не существует или вы неправильно ввели свой пароль'))
              }
            });
          }, 3000);
        })
      })
      .then(() => {
        setRedirect('/main')
        Clear()
      })
      .finally(() => {
        setDisabled(false)
        setHide(classes.hide)
      })
  }

  function Clear() {
    setNickname('');
    setPassword('');
  }

  // useEffect(() => {
  //   setNickname(localStorage.getItem('nickname'))
  //   setPassword(localStorage.getItem('password'))
  // }, [])

  return (
    <Card className='form'>
      <Grid className='form-register head' container direction="row" justify="space-between">
        <Typography variant='h5'>Войти в систему</Typography>
        <Typography variant='h5'>или</Typography>
        <Button className={classes.register} disabled={disabled} variant="outlined" color="primary"><Link to='/register'>Зарегистриговаться</Link></Button>
      </Grid>
      <Grid className={`form-register ${classes.body}`} container>
        <TextField id="standard-basic" label="Введите имя" value={nickname} onChange={targetName} disabled={disabled} type='text' />
        <TextField id="standard-basic" label="Введите пароль" value={password} onChange={targetPassword} disabled={disabled} type='password' />
      </Grid>
      <Grid className='form-register footer' container direction="row" justify="space-between" alignItems="center">
        <Button id='login' size="small" disabled={disabled} variant="contained" onClick={Click} type='submit'><Redirect to={redirect} />Войти</Button>
        <CircularProgress id='loader' className={hide} />
        <Button onClick={Clear} type='submit' disabled={disabled}>Очистить</Button>
      </Grid>
    </Card>
  )
}

export default Login;