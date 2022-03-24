import React from 'react';
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
import { useDispatch } from 'react-redux'
import { getLogin, setEmail, setPassword, clear, clearType } from '../redux/features/form/formSlice';


const Login = ({
  loading, formInputs, errors,
  buttonStyle,
  show, showPassword }) => {

  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Container maxWidth='sm'>
      <Card className='form'>
        <Grid className='form-register head' container direction="row" justify="space-between">
          <Typography variant='h5'>Войти в систему</Typography>
          <Typography variant='h5'>или</Typography>
          <Link to='/register' onClick={() => dispatch(clear())} style={{ textDecoration: 'none' }}>
            <Button className={classes.register} onClick={() => dispatch(clearType())} disabled={loading.disabled} variant="outlined" color="primary">
              Зарегистриговаться
            </Button>
          </Link>
        </Grid>
        <Grid className={`form-register ${classes.body}`} container>
          <TextField
            fullWidth
            label="Введите почту"
            value={formInputs.email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            disabled={loading.disabled}
            type='email'
            error={errors.errorEmail}
            helperText={errors.emailText}
          />
          <span>
            <TextField
              fullWidth
              label="Введите пароль"
              value={formInputs.password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              disabled={loading.disabled}
              type={show === true ? 'text' : 'password'}
              error={errors.errorPassword}
              helperText={errors.passwordText}
            />
            <Button
              className={classes.showPasswordButton}
              onClick={showPassword}
              disabled={loading.disabled}
              style={{ marginBottom: buttonStyle }}
            >
              {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Button>
          </span>
        </Grid>
        <Grid className={`form-register ${classes.footer}`} container direction="row" justify="space-between" alignItems="center">
          <Button id='login' size="small" disabled={loading.disabled} variant="contained" onClick={() => dispatch(getLogin(formInputs))} type='submit'>
            <Redirect to={loading.redirect === false ? '/' : '/feed/posts'} />
            Войти
          </Button>
          <CircularProgress id='loader' className='visible' style={{ display: loading.loader }} />
          <Button onClick={() => dispatch(clear())} type='submit' disabled={loading.disabled}>Очистить</Button>
        </Grid>
      </Card>
    </Container>
  )
}

export default Login;