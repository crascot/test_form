import React, { useState } from 'react';
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
import { SignIn } from '../services/services';


const Login = () => {

  const classes = useStyles()

  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  const [disabled, setDisabled] = useState(false)
  const [hide, setHide] = useState(classes.hide)

  const [redirect, setRedirect] = useState('')

  const handleSubmit = () => {
    setDisabled(true);
    setHide(null);
    SignIn(nickname, password)
      .then(() => {
        alert('Добро пожаловать')
        setRedirect('/main')
      })
      .finally(() => {
        setDisabled(false);
        setHide(classes.hide);
      })
  }

  function targetName(event) {
    setNickname(event.target.value)
  }
  function targetPassword(event) {
    setPassword(event.target.value)
  }

  function Clear() {
    setNickname('');
    setPassword('');
  }

  return (
    <Card className='form'>
      <Grid className='form-register head' container direction="row" justify="space-between">
        <Typography variant='h5'>Войти в систему</Typography>
        <Typography variant='h5'>или</Typography>
        <Button className={classes.register} disabled={disabled} variant="outlined" color="primary"><Link to='/register'>Зарегистриговаться</Link></Button>
      </Grid>
      <Grid className={`form-register ${classes.body}`} container>
        <TextField label="Введите имя" value={nickname} onChange={targetName} disabled={disabled} type='text' />
        <TextField label="Введите пароль" value={password} onChange={targetPassword} disabled={disabled} type='password' />
      </Grid>
      <Grid className='form-register footer' container direction="row" justify="space-between" alignItems="center">
        <Button id='login' size="small" disabled={disabled} variant="contained" onClick={handleSubmit} type='submit'><Redirect to={redirect} />Войти</Button>
        <CircularProgress id='loader' className={`${hide} + visible`} />
        <Button onClick={Clear} type='submit' disabled={disabled}>Очистить</Button>
      </Grid>
    </Card>
  )
}

export default Login;