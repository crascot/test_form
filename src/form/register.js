import React, { useState, useEffect } from 'react';
import {
    Button,
    Card,
    Grid,
    Typography,
    CircularProgress,
    TextField
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { dataBase } from '../database/database';
import { useStyles } from './styles/styles';


const Register = () => {

    const classes = useStyles()

    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [disabled, setDisabled] = useState(false)
    const [hide, setHide] = useState(classes.hide)

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

    function Click() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        let promise = new Promise((resolve, reject) => {
            // if (!nickname) {
            //     reject(alert('Пожалуйста введите ваше имя'))
            // } else if (+nickname) {
            //     reject(alert('Имя не может состоять из цифр'))
            // } else if (!email) {
            //     reject(alert('Введите почту'))
            // } else if (!reg.test(email)) {
            //     reject(alert('Почта некорректна'))
            // } else if (!password) {
            //     reject(alert('Введите пароль'))
            // } else if (password.length < 8) {
            //     reject(alert('Этот пароль слишкой короткий'))
            // } else if (password !== confirmPassword) {
            //     reject(alert('Пароли не совпадают'))
            // } else {
            setDisabled(true)
            setHide()
            // }
            resolve()
        })
        promise
            .then(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        let DB = JSON.parse(localStorage.getItem('database'))
                        let duplicate = DB.users.find(user => user.email === email)
                        let user = {
                            name: nickname,
                            email: email,
                            password: password
                        }

                        if (duplicate) reject(alert('Данная почта занята'))
                        else {
                            localStorage.setItem('database', JSON.stringify(user))
                            DB.users.push(user)
                            localStorage.setItem('database', JSON.stringify(DB))
                            resolve()
                        }
                    }, 3000);
                })
            })
            .then(() => {
                Clear()
            })
            .finally(() => {
                setDisabled(false)
                setHide(classes.hide)
            })
    }

    function Clear() {
        setNickname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    // useEffect(() => {

    // }, [])

    return (
        <Card className='form'>
            <Grid className='form-register head' container direction="row" justify="space-between">
                <Typography variant='h5'>Зарегистриговаться</Typography>
                <Typography variant='h5'>или</Typography>
                <Button className={classes.register} disabled={disabled} variant="outlined" color="primary"><Link to='/'>Войти</Link></Button>
            </Grid>
            <Grid className={`form-register ${classes.body}`} container>
                <TextField id="standard-basic" label="Введите имя" value={nickname} onChange={targetName} disabled={disabled} type='text' />
                <TextField id="standard-basic" label="Введите вашу почту" value={email} onChange={targetEmail} disabled={disabled} type='email' />
                <TextField id="standard-basic" label="Придумайте пароль" value={password} onChange={targetPassword} disabled={disabled} type='password' />
                <TextField id="standard-basic" label="Подтвердите пароль" value={confirmPassword} onChange={targetConfirmPassword} disabled={disabled} type='password' />
            </Grid>
            <Grid className='form-register footer' container direction="row" justify="space-between">
                <Button id='register' size="small" disabled={disabled} variant="contained" onClick={Click} type='submit' >Зарегистриговаться</Button >
                <CircularProgress id='loader' className={hide} />
                <Button onClick={Clear} disabled={disabled} >Очистить</Button>
            </Grid>
        </Card>
    )
}

export default Register;