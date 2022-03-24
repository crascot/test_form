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
    loading, formInputs, errors,
    show, showPassword,
    buttonStyle }) => {

    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Container maxWidth='sm'>
            <Card className='form'>
                <Grid className='form-register head' container direction="row" justify="space-between">
                    <Typography variant='h5'>Зарегистриговаться</Typography>
                    <Typography variant='h5'>или</Typography>
                    <Link to='/' onClick={() => dispatch(clear())} style={{ textDecoration: 'none' }}><Button className={classes.register} onClick={() => dispatch(clearType())} disabled={loading.disabled} variant="outlined" color="primary">Войти</Button></Link>
                </Grid>
                <Grid className={`form-register ${classes.body}`} container>
                    <TextField
                        fullWidth
                        label="Введите имя"
                        value={formInputs.nickname}
                        onChange={(e) => dispatch(setName(e.target.value))}
                        disabled={loading.disabled}
                        error={errors.errorName}
                        helperText={errors.nameText}
                    />
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
                    <TextField
                        fullWidth
                        label="Подтвердите пароль"
                        value={formInputs.confirmPassword}
                        onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
                        disabled={loading.disabled}
                        type={show === true ? 'text' : 'password'}
                        error={errors.errorConfirmPassword}
                        helperText={errors.confirmPasswordText}
                    />
                </Grid>
                <Grid className='form-register footer' container direction="row" justify="space-between">
                    <Button id='register' size="small" disabled={loading.disabled} variant="contained" onClick={() => dispatch(getRegister(formInputs))} type='submit' >
                        <Redirect to={loading.redirect === false ? '/register' : '/feed/posts'} />
                        Зарегистриговаться
                    </Button >
                    <CircularProgress id='loader' className='visible' style={{ display: loading.loader }} />
                    <Button onClick={() => dispatch(clear())} disabled={loading.disabled} >Очистить</Button>
                </Grid>
            </Card>
        </Container>
    )
}

export default Register;