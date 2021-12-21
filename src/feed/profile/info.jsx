import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    // TextField,
    Input,
    Button,
    // Stepper,
    // Step,
    // StepLabel,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SaveIcon from '@mui/icons-material/Save';


const useStyles = makeStyles({
    info: {
        '& span': {
            width: 133,
            minWidth: 133
        },
        '& input': {
            width: '133px'
        }
    },
    footer: {
        width: '100%',
    },
    icon: {
        marginRight: 7
    },
})

const Info = ({ feedName, edit, editUser }) => {
    const classes = useStyles();

    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    let DB = JSON.parse(localStorage.getItem('database'))

    const changeData = () => {
        DB.users.forEach(user => {
            if (user.name === feedName) {
                let newUser = {
                    name: name,
                    birthday: birthday,
                    gender: gender,
                    password: password,
                    phone: phone,
                    email: email,
                }
                DB.users.push(newUser)
                localStorage.setItem('database', JSON.stringify(DB))
            }
        })
    }

    return (
        <Box style={{ width: '70%' }}>
            <Paper elevation={1} style={{ padding: 16 }} >
                <div>
                    <Typography variant="h3" component="div" gutterBottom>
                        Основная информация
                    </Typography>

                    <div className={classes.info}>
                        <Box display='flex' alignItems='center' justifyContent='flex-start'>
                            <Typography variant="overline" display="block" gutterBottom>
                                Имя:
                            </Typography>
                            {
                                edit === false ?
                                    <Typography variant="h6" gutterBottom component="div">
                                        {
                                            DB.users.map((user) => user.name === feedName ? user.name : false)
                                        }
                                    </Typography>
                                    :
                                    <div>
                                        <Input label="Standard" value={name} onChange={(event) => setName(event.target.value)} />
                                    </div>
                            }
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='flex-start'>
                            <Typography variant="overline" display="block" gutterBottom>
                                Дата рождения:
                            </Typography>
                            {
                                edit === false ?
                                    <Typography variant="h6" gutterBottom component="div">
                                        15.01.2003
                                    </Typography>
                                    :
                                    <div>
                                        <Input label="Standard" value={birthday} onChange={(event) => setBirthday(event.target.value)} />
                                    </div>
                            }
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='flex-start'>
                            <Typography variant="overline" display="block" gutterBottom>
                                Пол:
                            </Typography>
                            {
                                edit === false ?
                                    <Typography variant="h6" gutterBottom component="div">
                                        Мужской
                                    </Typography>
                                    :
                                    <div>
                                        <Input label="Standard" value={gender} onChange={(event) => setGender(event.target.value)} />
                                    </div>
                            }
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='flex-start'>
                            <Typography variant="overline" display="block" gutterBottom>
                                Пароль:
                            </Typography>
                            {
                                edit === false ?
                                    <Typography variant="h6" gutterBottom component="div">
                                        {
                                            DB.users.map((user) => user.name === feedName ? user.password : false)
                                        }
                                    </Typography>
                                    :
                                    <div>
                                        <Input label="Standard" value={password} onChange={(event) => setPassword(event.target.value)} />
                                    </div>
                            }
                        </Box>
                    </div>

                    <div>
                        <Typography variant="h3" component="div" gutterBottom>
                            Связь с пользователем
                        </Typography>

                        <div className={classes.info}>
                            <Box display='flex' alignItems='center' justifyContent='flex-start'>
                                <Typography variant="overline" display="block" gutterBottom>
                                    Телефон:
                                </Typography>
                                <div>
                                    <Input label="Standard" type="tel" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                                </div>
                            </Box>

                            <Box display='flex' alignItems='center' justifyContent='flex-start'>
                                <Typography variant="overline" display="block" gutterBottom>
                                    Почта:
                                </Typography>
                                {
                                    edit === false ?
                                        <Typography variant="h6" gutterBottom component="div">
                                            {
                                                DB.users.map((user) => user.name === feedName ? user.email : false)
                                            }
                                        </Typography>
                                        :
                                        <div>
                                            <Input label="Standard" value={email} onChange={(event) => setEmail(event.target.value)} />
                                        </div>
                                }
                            </Box>
                        </div>
                    </div>
                </div>
                <Box className={classes.footer} display='flex' alignItems='center' justifyContent='flex-end'>
                    {
                        edit === true ?
                            <span onClick={changeData}><Button onClick={editUser} variant="contained"><SaveIcon className={classes.icon} /> Сохранить</Button></span>
                            :
                            <Button onClick={editUser} variant="contained"><BorderColorIcon className={classes.icon} /> Изменить профиль</Button>
                    }
                </Box>
            </Paper>
        </Box>
    )
}

export default Info;