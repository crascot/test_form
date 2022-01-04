import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Input,
    Alert,
} from '@mui/material';
import { DB, reg } from '../../services/services';
import SettingsIcon from '@mui/icons-material/Settings';
import SaveIcon from '@mui/icons-material/Save';
import './profile.scss';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Info = ({ feedUser }) => {

    const [edit, setEdit] = useState(0)

    const filtered = DB.users.filter(user => user.name !== feedUser.name ? false : user)

    const [name, setName] = useState(feedUser.name)
    const [birthday, setBirthday] = useState(feedUser.birthday)
    const [gender, setGender] = useState(feedUser.gender)
    const [password, setPassword] = useState(feedUser.password)
    const [phone, setPhone] = useState(feedUser.phone)
    const [email, setEmail] = useState(feedUser.email)

    if (!gender) setGender('Мужской')

    const changeData = () => {
        return new Promise((resolve, reject) => {
            filtered.forEach(user => {
                if (name) {
                    if (!name || +name) reject(alert('Имя некорректно'))
                    else user.name = name
                }
                if (birthday) user.birthday = birthday
                if (gender) user.gender = gender
                if (password) {
                    if (password.length > 7) user.password = password
                    else reject(alert('Пароль слишком короткий'))
                }
                if (phone) {
                    if (phone.length === 13) user.phone = phone
                    else reject(alert('Некорректный номер телефона'))
                }
                if (email) {
                    if (reg.test(email)) user.email = email;
                    else reject(alert('Почта некорректна'))
                }
                resolve()
            })
        }).then(() => {
            localStorage.setItem('database', JSON.stringify(DB))
            setEdit(0)
        })
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => setAnchorEl(null);
    const changeGenderMen = () => {
        setAnchorEl(null);
        setGender('Мужской')
    }
    const changeGenderWomen = () => {
        setAnchorEl(null);
        setGender('Женский')
    }

    return (
        <Box style={{ width: '70%' }}>
            <Paper elevation={1} className='paper' key={feedUser.name} >
                <div>
                    <Typography variant="h3" component="div" gutterBottom className='title'>
                        Основная информация
                    </Typography>

                    <div className='info'>
                        <Box display='flex' alignItems='center' justifyContent='flex-start' className='box'>
                            <Typography variant="overline" display="block" gutterBottom className='class'>
                                Имя:
                            </Typography>
                            <div className='user-data' onClick={() => setEdit(1)}>
                                {
                                    edit === 1 ?
                                        <Input label="Standard" value={name} onChange={(event) => setName(event.target.value)} />
                                        :
                                        <Typography variant="h6" gutterBottom component="p" key={name}>
                                            {
                                                name ?
                                                    name
                                                    :
                                                    <Alert variant="filled" severity="error" className='alert'>Имя не указано</Alert>
                                            }
                                        </Typography>
                                }

                                {
                                    edit === 1 ?
                                        <SaveIcon onClick={changeData} onChange={() => setEdit(0)} />
                                        :
                                        <SettingsIcon className='icon' />
                                }
                            </div>
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='flex-start' className='box'>
                            <Typography variant="overline" display="block" gutterBottom className='class'>
                                Дата рождения:
                            </Typography>
                            <div className='user-data' onClick={() => setEdit(2)}>
                                {
                                    edit === 2 ?
                                        <Input label="Standard" type='date' value={birthday} onChange={(event) => setBirthday(event.target.value)} />
                                        :
                                        <Typography variant="h6" gutterBottom component="p" key={birthday}>
                                            {
                                                birthday ?
                                                    birthday
                                                    :
                                                    <Alert variant="filled" severity="warning" className='alert'>Дата рождения не указано</Alert>
                                            }
                                        </Typography>
                                }

                                {
                                    edit === 2 ?
                                        <SaveIcon onClick={changeData} onChange={() => setEdit(0)} />
                                        :
                                        <SettingsIcon className='icon' />
                                }
                            </div>
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='flex-start' className='box'>
                            <Typography variant="overline" display="block" gutterBottom className='class'>
                                Пол:
                            </Typography>
                            <div className='user-data' onClick={() => setEdit(3)}>
                                {
                                    <Typography variant="h6" gutterBottom component="p" key={gender}>
                                        {
                                            edit === 3 ?
                                                <div>
                                                    <Button
                                                        style={{ width: 'max-content', marginTop: '-4px'}}
                                                        variant="outlined"
                                                        id="basic-button"
                                                        aria-controls={open ? 'basic-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                        onClick={handleClick}
                                                    >
                                                        {gender}
                                                    </Button>
                                                    <Menu
                                                        id="basic-menu"
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleClose}
                                                        MenuListProps={{
                                                            'aria-labelledby': 'basic-button',
                                                        }}
                                                    >
                                                        <MenuItem onClick={changeGenderMen}>Мужской</MenuItem>
                                                        <MenuItem onClick={changeGenderWomen}>Женский</MenuItem>
                                                    </Menu>
                                                </div>
                                                :
                                                gender
                                        }
                                    </Typography>
                                }
                                {
                                    edit === 3 ?
                                        <SaveIcon onClick={changeData} onChange={() => setEdit(0)} />
                                        :
                                        <SettingsIcon className='icon' />
                                }
                            </div>
                        </Box>

                        <Box display='flex' alignItems='center' justifyContent='flex-start' className='box'>
                            <Typography variant="overline" display="block" gutterBottom className='class'>
                                Пароль:
                            </Typography>
                            <div className='user-data' onClick={() => setEdit(4)}>
                                {
                                    edit === 4 ?
                                        <Input label="Standard" value={password} onChange={(event) => setPassword(event.target.value)} />
                                        :
                                        <Typography variant="h6" gutterBottom component="p" key={password}>
                                            {
                                                password ?
                                                    password
                                                    :
                                                    <Alert variant="filled" severity="error" className='alert'>Пароль не указан</Alert>
                                            }
                                        </Typography>
                                }

                                {
                                    edit === 4 ?
                                        <SaveIcon onClick={changeData} onChange={() => setEdit(0)} />
                                        :
                                        <SettingsIcon className='icon' />
                                }
                            </div>
                        </Box>
                    </div>

                    <div>
                        <Typography variant="h3" component="div" gutterBottom className='title'>
                            Связь с пользователем
                        </Typography>

                        <div className='info'>
                            <Box display='flex' alignItems='center' justifyContent='flex-start' className='box'>
                                <Typography variant="overline" display="block" gutterBottom className='class'>
                                    Телефон:
                                </Typography>
                                <div className='user-data' onClick={() => setEdit(5)}>
                                    {
                                        edit === 5 ?
                                            <Input label="Standard" type='tel' value={phone} onChange={(event) => setPhone(event.target.value)} />
                                            :
                                            <Typography variant="h6" gutterBottom component="p" key={phone}>
                                                {
                                                    phone ?
                                                        phone
                                                        :
                                                        <Alert variant="filled" severity="warning" className='alert'>Телефон не указан</Alert>
                                                }
                                            </Typography>
                                    }

                                    {
                                        edit === 5 ?
                                            <SaveIcon onClick={changeData} onChange={() => setEdit(0)} />
                                            :
                                            <SettingsIcon className='icon' />
                                    }
                                </div>
                            </Box>

                            <Box display='flex' alignItems='center' justifyContent='flex-start' className='box'>
                                <Typography variant="overline" display="block" gutterBottom className='class'>
                                    Почта:
                                </Typography>
                                <div className='user-data' onClick={() => setEdit(6)}>
                                    {
                                        edit === 6 ?
                                            <Input label="Standard" value={email} onChange={(event) => setEmail(event.target.value)} />
                                            :
                                            <Typography variant="h6" gutterBottom component="p" key={email}>
                                                {
                                                    email ?
                                                        email
                                                        :
                                                        <Alert variant="filled" severity="error" className='alert'>Почта не указана</Alert>
                                                }
                                            </Typography>
                                    }

                                    {
                                        edit === 6 ?
                                            <SaveIcon onClick={changeData} onChange={() => setEdit(0)} />
                                            :
                                            <SettingsIcon className='icon' />
                                    }
                                </div>
                            </Box>
                        </div>
                    </div>
                </div>
            </Paper>
        </Box>
    )
}

export default Info;