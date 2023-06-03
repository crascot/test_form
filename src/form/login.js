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
  form, show,
  showPassword, buttonStyle, }) => {

  const classes = useStyles()
  const dispatch = useDispatch()

  const dispatchGetLogin = () => dispatch(getLogin(form))
  const dispatchSetEmail = (e) => dispatch(setEmail(e.target.value))
  const dispatchSetPassword = (e) => dispatch(setPassword(e.target.value))
  const dispatchClear = () => dispatch(clear())
  const dispatchClearType = () => dispatch(clearType())

  return (
    <Container maxWidth='sm'>
      <Card className='form'>
        <Grid className='form-register head' container direction="row" justify="space-between">
          <Typography variant='h5'>Войти в систему</Typography>
          <Typography variant='h5'>или</Typography>
          <span onClick={dispatchClear}>
            <Link to='/register' style={{ textDecoration: 'none' }}>
              <Button className={classes.register} onClick={dispatchClearType} disabled={form.disabled} variant="outlined" color="primary">
                Зарегистриговаться
              </Button>
            </Link>
          </span>
        </Grid>
        <Grid className={`form-register ${classes.body}`} container>
          <TextField
            fullWidth
            label="Введите почту"
            value={form.email}
            onChange={dispatchSetEmail}
            disabled={form.disabled}
            type='email'
            error={form.errorEmail}
            helperText={form.emailText}
          />
          <span>
            <TextField
              fullWidth
              label="Введите пароль"
              value={form.password}
              onChange={dispatchSetPassword}
              disabled={form.disabled}
              type={show ? 'text' : 'password'}
              error={form.errorPassword}
              helperText={form.passwordText}
            />
            <Button
              className={classes.showPasswordButton}
              onClick={showPassword}
              disabled={form.disabled}
              style={{ marginBottom: buttonStyle }}
            >
              {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </Button>
          </span>
        </Grid>
        <Grid className={`form-register ${classes.footer}`} container direction="row" justify="space-between" alignItems="center">
          <Button id='login' size="small" disabled={form.disabled} variant="contained" onClick={dispatchGetLogin} type='submit'>
            <Redirect to={!form.redirect ? '/' : '/feed/posts'} />
            Войти
          </Button>
          <CircularProgress id='loader' className='visible' style={{ display: form.loader }} />
          <Button onClick={dispatchClear} type='submit' disabled={form.disabled}>Очистить</Button>
        </Grid>
      </Card>
    </Container>
  )
}

export default Login;