import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Card,
  CircularProgress,
  TextField,
  Container,
} from '@material-ui/core';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, Redirect } from 'react-router-dom';
import { useStyles } from './styles/styles';
import { SignIn } from '../services/services';


const Login = ({
  nickname, targetName,
  password, targetPassword,
  disabled, setDisabled,
  errorName, errorPassword,
  helperTextName, helperTextPassword,
  checkName, checkPassword,
  show, showPassword,
  buttonStyle, setButtonStyle,
  clear, clearType }) => {

  const classes = useStyles()

  const [hide, setHide] = useState(classes.hide)
  const [redirect, setRedirect] = useState('')
  const [click, setClick] = useState(false)

  useEffect(() => {
    if (click === true) {
      if (!nickname) checkName(true)('Пожалуйста введите ваше имя')
      else if (+nickname) checkName(true)('Имя не может состоять из цифр')
      else checkName()()

      if (password.length < 8) {
        checkPassword(true)('Пароль слишкой короткий')
        setButtonStyle(27);
      }
      else {
        checkPassword()()
        setButtonStyle()
      }

    }
  })

  const handleSubmit = () => {
    setClick(true);
    setDisabled(true);
    setHide(null);
    SignIn(nickname, password)
      .then(() => {
        localStorage.setItem('auth_token', true)
        localStorage.setItem('userName', nickname)
        setRedirect('/feed/posts')
        clear()
      }).catch((props) => {
        switch (props) {
          case nickname:
            if (nickname === 0) checkName(true)('Пожалуйста введите ваше имя')
            break;
          case password:
            checkPassword(true)('Пароль слишкой короткий')
            break;

          // no default
        }
      })
      .finally(() => {
        setDisabled(false);
        setHide(classes.hide);
      })
  }

  return (
    <Container maxWidth='sm'>
      <Card className='form'>
        <Grid className='form-register head' container direction="row" justify="space-between">
          <Typography variant='h5'>Войти в систему</Typography>
          <Typography variant='h5'>или</Typography>
          <Link to='/register' onClick={clear} style={{ textDecoration: 'none' }}>
            <Button className={classes.register} onClick={clearType} disabled={disabled} variant="outlined" color="primary">
              Зарегистриговаться
            </Button>
          </Link>
        </Grid>
        <Grid className={`form-register ${classes.body}`} container>
          <TextField
            fullWidth
            label="Введите имя"
            value={nickname}
            onChange={targetName}
            disabled={disabled}
            type='text'
            error={errorName}
            helperText={helperTextName}
          />
          <span>
            <TextField
              fullWidth
              label="Введите пароль"
              value={password}
              onChange={targetPassword}
              disabled={disabled}
              type={show === true ? 'text' : 'password'}
              error={errorPassword}
              helperText={helperTextPassword}
            />
            <Button
              className={classes.showPasswordButton}
              onClick={showPassword}
              disabled={disabled}
              style={{ marginBottom: buttonStyle }}
            >
              {show === true ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Button>
          </span>
        </Grid>
        <Grid className={`form-register ${classes.footer}`} container direction="row" justify="space-between" alignItems="center">
          <Button id='login' size="small" disabled={disabled} variant="contained" onClick={handleSubmit} type='submit'><Redirect to={redirect} />Войти</Button>
          <CircularProgress id='loader' className={`${hide} + visible`} />
          <Button onClick={clear} type='submit' disabled={disabled}>Очистить</Button>
        </Grid>
      </Card>
    </Container>
  )
}

export default Login;