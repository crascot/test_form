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
import { SignIn, reg } from '../services/services';


const Login = ({
  email, targetEmail,
  password, targetPassword,
  disabled, setDisabled,
  errorEmail, errorPassword,
  helperTextEmail, helperTextPassword,
  checkEmail, checkPassword,
  show, showPassword,
  buttonStyle, setButtonStyle,
  clear, clearType }) => {

  const classes = useStyles()

  const [hide, setHide] = useState('none')
  const [redirect, setRedirect] = useState('')
  const [click, setClick] = useState(false)

  useEffect(() => {
    if (click === true) {
      if (!email || !reg.test(email)) checkEmail(true)('Почта некорректна')
      else checkEmail()()

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
    setHide('inherit');
    SignIn(email, password)
      .then(() => {
        clear()
        localStorage.setItem('auth_token', true)
        setRedirect('/feed/posts')
      }).catch((props) => {
        switch (props) {
          case email:
            checkEmail()('Почта некорректна')
            break;
          case password:
            checkPassword(true)('Пароль слишкой короткий')
            break;

          // no default
        }
      })
      .finally(() => {
        setDisabled(false);
        setHide('none');
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
            label="Введите почту"
            value={email}
            onChange={targetEmail}
            disabled={disabled}
            type='text'
            error={errorEmail}
            helperText={helperTextEmail}
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
          <CircularProgress id='loader' className='visible' style={{ display: hide }} />
          <Button onClick={clear} type='submit' disabled={disabled}>Очистить</Button>
        </Grid>
      </Card>
    </Container>
  )
}

export default Login;