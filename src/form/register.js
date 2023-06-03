import React from 'react';
import {
    Button,
    Card,
    Grid,
    Typography,
    CircularProgress,
    TextField,
    Container
} from '@material-ui/core';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, Redirect } from 'react-router-dom';
import { useStyles } from './styles/styles';
import { useDispatch } from 'react-redux'
import { getRegister, setName, setEmail, setPassword, setConfirmPassword, clear, clearType } from '../redux/features/form/formSlice';


const Register = ({
    form, show,
    showPassword, buttonStyle, }) => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const dispatchGetRegister = () => dispatch(getRegister(form))
    const dispatchName = (e) => dispatch(setName(e.target.value))
    const dispatchEmail = (e) => dispatch(setEmail(e.target.value))
    const dispatchPassword = (e) => dispatch(setPassword(e.target.value))
    const dispatchConfirmPassword = (e) => dispatch(setConfirmPassword(e.target.value))
    const dispatchClear = () => dispatch(clear())
    const dispatchClearType = () => dispatch(clearType())

    return (
        <Container maxWidth='sm'>
            <Card className='form'>
                <Grid className='form-register head' container direction="row" justify="space-between">
                    <Typography variant='h5'>Зарегистриговаться</Typography>
                    <Typography variant='h5'>или</Typography>
                    <span onClick={dispatchClear}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button className={classes.register} onClick={dispatchClearType} disabled={form.disabled} variant="outlined" color="primary">
                                Войти
                            </Button>
                        </Link>
                    </span>
                </Grid>
                <Grid className={`form-register ${classes.body}`} container>
                    <TextField
                        fullWidth
                        label="Введите имя"
                        value={form.nickname}
                        onChange={dispatchName}
                        disabled={form.disabled}
                        error={form.errorName}
                        helperText={form.nameText}
                    />
                    <TextField
                        fullWidth
                        label="Введите почту"
                        value={form.email}
                        onChange={dispatchEmail}
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
                            onChange={dispatchPassword}
                            disabled={form.disabled}
                            type={show === true ? 'text' : 'password'}
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
                    <TextField
                        fullWidth
                        label="Подтвердите пароль"
                        value={form.confirmPassword}
                        onChange={dispatchConfirmPassword}
                        disabled={form.disabled}
                        type={show === true ? 'text' : 'password'}
                        error={form.errorConfirmPassword}
                        helperText={form.confirmPasswordText}
                    />
                </Grid>
                <Grid className='form-register footer' container direction="row" justify="space-between">
                    <Button id='register' size="small" disabled={form.disabled} variant="contained" onClick={dispatchGetRegister} type='submit' >
                        <Redirect to={form.redirect === false ? '/register' : '/feed/posts'} />
                        Зарегистриговаться
                    </Button >
                    <CircularProgress id='loader' className='visible' style={{ display: form.loader }} />
                    <Button onClick={() => dispatch(clear())} disabled={form.disabled} >Очистить</Button>
                </Grid>
            </Card>
        </Container>
    )
}

export default Register;