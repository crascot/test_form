import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Card,
  CircularProgress,
  TextField,
  Container
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { useStyles } from './styles/styles';
import { SignIn } from '../services/services';


const Login = ({
  nickname, setNickname,
  password, setPassword,
  disabled, setDisabled,
  errorName, setErrorName,
  errorPassword, setErrorPassword,
  helperTextName, setHelperTextName,
  helperTextPassword, setHelperTextPassword }) => {

  const classes = useStyles()

  const [hide, setHide] = useState(classes.hide)
  const [redirect, setRedirect] = useState('')
  const [click, setClick] = useState(false)

  const checkName = error => text => {
    setErrorName(error)
    setHelperTextName(text)
  }
  const checkPassword = error => text => {
    setErrorPassword(error)
    setHelperTextPassword(text)
  }

  useEffect(() => {
    if (click === true) {
      if (!nickname) checkName(true)('Пожалуйста введите ваше имя')
      else if (+nickname) checkName(true)('Имя не может состоять из цифр')
      else checkName()()

      if (password.length < 8) checkPassword(true)('Пароль слишкой короткий')
      else checkPassword()()
    }
  }, [nickname, password, click])

  const handleSubmit = () => {
    setClick(true);
    setDisabled(true);
    setHide(null);
    SignIn(nickname, password)
      .then(() => {
        localStorage.setItem('auth_token', true)
        setRedirect('/feed')
      }).catch((props) => {
        switch (props) {
          case nickname:
            if (nickname === 0) checkName()('Пожалуйста введите ваше имя')
            else checkName()('Имя не может состоять из цифр')
            break;
          case password:
            checkPassword('Пароль слишкой короткий')
            break;
        }
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
    <Container maxWidth='sm'>
      <Card className='form'>
        <Grid className='form-register head' container direction="row" justify="space-between">
          <Typography variant='h5'>Войти в систему</Typography>
          <Typography variant='h5'>или</Typography>
          <Button className={classes.register} disabled={disabled} variant="outlined" color="primary"><Link to='/register'>Зарегистриговаться</Link></Button>
        </Grid>
        <Grid className={`form-register ${classes.body}`} container>
          <TextField label="Введите имя" value={nickname} onChange={targetName} disabled={disabled} type='text' error={errorName} helperText={helperTextName} />
          <TextField label="Введите пароль" value={password} onChange={targetPassword} disabled={disabled} type='password' error={errorPassword} helperText={helperTextPassword} />
        </Grid>
        <Grid className='form-register footer' container direction="row" justify="space-between" alignItems="center">
          <Button id='login' size="small" disabled={disabled} variant="contained" onClick={handleSubmit} type='submit'><Redirect to={redirect} />Войти</Button>
          <CircularProgress id='loader' className={`${hide} + visible`} />
          <Button onClick={Clear} type='submit' disabled={disabled}>Очистить</Button>
        </Grid>
      </Card>
    </Container>
  )
}

export default Login;