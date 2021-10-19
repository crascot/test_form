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

    useEffect(() => {
        const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        if (click === true) {
            if (!nickname || +nickname) {
                setErrorName(true)
                setHelperTextName('Некорректное имя')
            } else {
                setErrorName(false)
                setHelperTextName('')
            }
            if (!email || !reg.test(email)) {
                setErrorEmail(true)
                setHelperTextEmail('Почта некорректна')
            } else {
                setErrorEmail(false)
                setHelperTextEmail('')
            }
            if (password.length < 8) {
                setErrorPassword(true)
                setHelperTextPassword('Пароль слишкой короткий')
            } else {
                setErrorPassword(false)
                setHelperTextPassword('')
            }
            if(password !== confirmPassword) {
                setErrorConfirmPassword(true)
                setHelperTextConfirmPassword('Пароли не совпадают')
            } else {
                setErrorConfirmPassword(false)
                setHelperTextConfirmPassword('')
            }
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
                if (props === nickname) {
                    setHelperTextName('Некорректное имя')
                }
                if (props === email) {
                    setHelperTextEmail('Почта некорректна')
                }
                if (props === password && props !== confirmPassword) {
                    setHelperTextPassword('Пароль слишкой короткий')
                    setHelperTextConfirmPassword('Пароли не совпадают')
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