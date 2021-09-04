import React, { useState } from 'react';
import {
    Button,
    Card,
    Grid,
    Typography,
    CircularProgress,
    TextField,
    Container
} from '@material-ui/core';
import { Link } from 'react-router-dom';
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

    const handleSubmit = () => {
        setDisabled(true);
        setHide(null);
        CheckIn(nickname, email, password, confirmPassword)
            .then(() => {
                Clear()
            }).catch(() => { })
            .finally(() => {
                setDisabled(false);
                setHide(classes.hide);
            })
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
                    <TextField label="Введите имя" value={nickname} onChange={targetName} disabled={disabled} type='text' />
                    <TextField label="Введите вашу почту" value={email} onChange={targetEmail} disabled={disabled} type='email' />
                    <TextField label="Придумайте пароль" value={password} onChange={targetPassword} disabled={disabled} type='password' />
                    <TextField label="Подтвердите пароль" value={confirmPassword} onChange={targetConfirmPassword} disabled={disabled} type='password' />
                </Grid>
                <Grid className='form-register footer' container direction="row" justify="space-between">
                    <Button id='register' size="small" disabled={disabled} variant="contained" onClick={handleSubmit} type='submit' >Зарегистриговаться</Button >
                    <CircularProgress id='loader' className={hide} />
                    <Button onClick={Clear} disabled={disabled} >Очистить</Button>
                </Grid>
            </Card>
        </Container>
    )
}

export default Register;