import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    Grid,
    Typography,
    CircularProgress,
    TextField,
    Container
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { useStyles } from './styles/styles';
import { CheckIn } from '../services/services';


const Register = ({
    nickname, targetName,
    email, targetEmail,
    password, targetPassword,
    confirmPassword, targetConfirmPassword,
    disabled, setDisabled,
    errorName, errorEmail,
    errorPassword, errorConfirmPassword,
    helperTextName, helperTextEmail,
    helperTextPassword, helperConfirmPassword,
    checkName, checkEmail, checkPassword, checkConfirmPassword,
    clear, clearType }) => {

    const classes = useStyles()

    const [hide, setHide] = useState(classes.hide)
    const [redirect, setRedirect] = useState('/register')
    const [click, setClick] = useState(false)

    useEffect(() => {
        const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        if (click === true) {
            if (!nickname) checkName(true)('Пожалуйста введите ваше имя')
            else if (+nickname) checkName(true)('Имя не может состоять из цифр')
            else checkName()()

            if (!email || !reg.test(email)) checkEmail(true)('Почта некорректна')
            else checkEmail()()

            if (password.length < 8) checkPassword(true)('Пароль слишкой короткий')
            else checkPassword()()

            if (password !== confirmPassword) checkConfirmPassword(true)('Пароли не совпадают')
            else checkConfirmPassword()()
        }
    })

    const handleSubmit = () => {
        setClick(true);
        setDisabled(true);
        setHide(null);
        CheckIn(nickname, email, password, confirmPassword)
            .then(() => {
                localStorage.setItem('auth_token', true)
                localStorage.setItem('userName', nickname)
                setRedirect('/feed')
                clear()
            }).catch((props) => {
                switch (props) {
                    case nickname:
                        if (nickname === 0) checkName(true)('Пожалуйста введите ваше имя')
                        break;
                    case email:
                        checkEmail()('Почта некорректна')
                        break;
                    case password:
                        if (password !== confirmPassword) {
                            checkPassword(true)('Пароль слишкой короткий')
                            checkConfirmPassword(true)('Пароли не совпадают')
                        }

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
                    <Typography variant='h5'>Зарегистриговаться</Typography>
                    <Typography variant='h5'>или</Typography>
                    <Link to='/' onClick={clear} style={{ textDecoration: 'none' }}><Button className={classes.register} onClick={clearType} disabled={disabled} variant="outlined" color="primary">Войти</Button></Link>
                </Grid>
                <Grid className={`form-register ${classes.body}`} container>
                    <TextField label="Введите имя" value={nickname} onChange={targetName} disabled={disabled} type='text' error={errorName} helperText={helperTextName} />
                    <TextField label="Введите вашу почту" value={email} onChange={targetEmail} disabled={disabled} type='email' error={errorEmail} helperText={helperTextEmail} />
                    <TextField label="Придумайте пароль" value={password} onChange={targetPassword} disabled={disabled} type='password' error={errorPassword} helperText={helperTextPassword} />
                    <TextField label="Подтвердите пароль" value={confirmPassword} onChange={targetConfirmPassword} disabled={disabled} type='password' error={errorConfirmPassword} helperText={helperConfirmPassword} />
                </Grid>
                <Grid className='form-register footer' container direction="row" justify="space-between">
                    <Button id='register' size="small" disabled={disabled} variant="contained" onClick={handleSubmit} type='submit' ><Redirect to={redirect} />Зарегистриговаться</Button >
                    <CircularProgress id='loader' className={hide} />
                    <Button onClick={clear} disabled={disabled} >Очистить</Button>
                </Grid>
            </Card>
        </Container>
    )
}

export default Register;