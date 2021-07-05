import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import { Input, Button, Card, Grid, Container, Typography, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Register = () => {

    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function targetName(event) {
        setNickname(event.target.value)
        localStorage.setItem('nickname', event.target.value)
    }
    function targetEmail(event) {
        setEmail(event.target.value)
        localStorage.setItem('email', event.target.value)
    }
    function targetPassword(event) {
        setPassword(event.target.value)
        localStorage.setItem('password', event.target.value)
    }
    function targetConfirmPassword(event) {
        setConfirmPassword(event.target.value)
        localStorage.setItem('confirmPassword', event.target.value)
    }

    function Click() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!nickname) {
                    reject(alert('Пожалуйста введите ваше имя'))
                } else if (+nickname) {
                    reject(alert('Имя не может состоять из цифр'))
                } else if (!email) {
                    reject(alert('Введите почту'))
                } else if (!reg.test(email)) {
                    reject(alert('Почта некорректна'))
                } else if (!password) {
                    reject(alert('Введите пароль'))
                } else if (password.length < 8) {
                    reject(alert('Этот пароль слишкой короткий'))
                } else if (password !== confirmPassword) {
                    reject(alert('Пароли не совпадают'))
                } else {
                    document.getElementById('register').style.pointerEvents = 'none';
                    document.getElementById('loader').classList.remove('hide')
                }
                setTimeout(() => {
                    const formData = [
                        localStorage.getItem('nickname'),
                        localStorage.getItem('email'),
                        localStorage.getItem('password'),
                        localStorage.getItem('confirmPassword')
                    ]
                    resolve(formData)
                }, 3000)
            }, 0)
        })
        promise
            .then(data => {
                document.getElementById('loader').classList.add('hide')
                render(
                    <Container maxWidth='sm'>
                        <Card>
                            <Typography variant="subtitle1">Ваше имя: {data[0]}</Typography>
                            <Typography variant="subtitle1">Ваша почта: {data[1]}</Typography>
                            <Typography variant="subtitle1">Ваш пароль: {data[2]}</Typography>
                        </Card>
                    </Container>
                )
            })
    }

    function Clear() {
        localStorage.clear()

        setNickname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    useEffect(() => {
        setNickname(localStorage.getItem('nickname'))
        setEmail(localStorage.getItem('email'))
        setPassword(localStorage.getItem('password'))
        setConfirmPassword(localStorage.getItem('confirmPassword'))
    }, [])

    return (
        <Card className='form'>
            <Grid className='form-register' container direction="row" justify="space-between">
                <Typography variant='h5'>Зарегистриговаться</Typography>
                <CircularProgress id='loader' className='hide' />
                <Button className='register'><Link to='/'>Войти</Link></Button>
            </Grid>
            <Grid className='form-register'>
                <Input value={nickname} onChange={targetName} type='text' placeholder='Введите имя' /> <hr width='0' />
                <Input value={email} onChange={targetEmail} type='email' placeholder='Введите email' /> <hr width='0' />
                <Input value={password} onChange={targetPassword} type='password' placeholder='Придумайте пароль' /> <hr width='0' />
                <Input value={confirmPassword} onChange={targetConfirmPassword} type='password' placeholder='Подтвердите пароль' /> <hr width='0' />
            </Grid>
            <Grid className='form-register' container direction="row" justify="space-between">
                <Button id='register' size="small" variant="contained" onClick={Click} type='submit' >Зарегистриговаться</Button >
                <Button onClick={Clear} >Очистить</Button>
            </Grid>
        </Card>
    )
}

export default Register;