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


const Register = () => {

    const classes = useStyles()

    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [disabled, setDisabled] = useState(false)
    const [hide, setHide] = useState(classes.hide)

    const [redirect, setRedirect] = useState('/register')

    const [errorName, setErrorName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)
    const [helperTextName, setHelperTextName] = useState('')
    const [helperTextEmail, setHelperTextEmail] = useState('')
    const [helperTextPassword, setHelperTextPassword] = useState('')
    const [helperConfirmPassword, setHelperTextConfirmPassword] = useState('')

    const [click, setClick] = useState(false)

    const checkName = error => text => {
        setErrorName(error)
        setHelperTextName(text)
    }
    const checkEmail = error => text => {
        setErrorEmail(error)
        setHelperTextEmail(text)
    }
    const checkPassword = error => text => {
        setErrorPassword(error)
        setHelperTextPassword(text)
    }
    const checkConfirmPassword = error => text => {
        setErrorConfirmPassword(error)
        setHelperTextConfirmPassword(text)
    }

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
    }, [nickname, email, password, confirmPassword, click])

    const handleSubmit = () => {
        setClick(true);
        setDisabled(true);
        setHide(null);
        CheckIn(nickname, email, password, confirmPassword)
            .then(() => {
                localStorage.setItem('auth_token', true)
                setRedirect('/feed')
            }).catch((props) => {
                switch (props) {
                    case nickname:
                        if (nickname === 0) checkName()('Пожалуйста введите ваше имя')
                        else checkName()('Имя не может состоять из цифр')
                        break;
                    case email:
                        checkEmail()('Почта некорректна')
                        break;
                    case password:
                        if (password !== confirmPassword) {
                            checkPassword()('Пароль слишкой короткий')
                            checkConfirmPassword()('Пароли не совпадают')
                        }
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
    function targetEmail(event) {
        setEmail(event.target.value)
    }
    function targetPassword(event) {
        setPassword(event.target.value)
    }
    function targetConfirmPassword(event) {
        setConfirmPassword(event.target.value)
    }

    function Clear() {
        setNickname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <Container maxWidth='sm'>
            <Card className='form'>
                <Grid className='form-register head' container direction="row" justify="space-between">
                    <Typography variant='h5'>Зарегистриговаться</Typography>
                    <Typography variant='h5'>или</Typography>
                    <Button className={classes.register} disabled={disabled} variant="outlined" color="primary"><Link to='/'>Войти</Link></Button>
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
                    <Button onClick={Clear} disabled={disabled} >Очистить</Button>
                </Grid>
            </Card>
        </Container>
    )
}

export default Register;