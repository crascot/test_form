import React, { useState } from 'react';
import {
    Grid,
    Box,
    Typography,
    Button,
    Menu,
    MenuItem,
    Input,
    Alert,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { DB, reg } from '../../services/services';
import { useEffect } from 'react';


const useStyles = makeStyles({
    info: {
        margin: 30,
    },
    blockData: {
        margin: '5px 0 !important',
        paddingTop: '0 !important'
    },
    mainTitle: {
        textAlign: 'center',
    },
    title: {
        margin: '0 !important',
        marginRight: '10px !important'
    },
    data: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
        overflow: 'hidden',
        marginBottom: 4,
    },
    input: {
        width: 150,
        marginBottom: 2,
    },
    alert: {
        width: 'max-content',
        margin: '0 auto',
        padding: '0 10px !important'
    },

    footer: {
        width: '100%',
        height: '100%',
        marginTop: 30,
        display: 'flex',
        justifyContent: 'flex-end'
    }
});

const Info = ({ feedUser, name, setName }) => {

    const classes = useStyles();

    const [edit, setEdit] = useState(0)
    const [column, setColumn] = useState('')

    const filtered = DB.users.filter(user => user.name !== feedUser.name ? false : user)

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
                    if (phone.length === 13 || 11) user.phone = phone
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
            setEdit(false)
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

    useEffect(() => {
        if (window.innerWidth <= 883) setColumn('column');
    }, [])

    return (
        <Box>
            <div className={classes.info}>
                <Typography variant="h3" component="div" gutterBottom className={classes.mainTitle}>
                    Персональные данные
                </Typography>

                <div>
                    <Grid container columns={16} direction={column}>
                        <Grid display='flex' alignItems='center' className={classes.blockData} item xs={7}>
                            <Typography variant="overline" display="block" className={classes.title} gutterBottom>
                                Имя:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={name} onChange={(event) => setName(event.target.value)} />
                                    :
                                    <span>
                                        {
                                            name ?
                                                <Typography variant="h6" className={classes.data} style={{ maxWidth: 180 }} gutterBottom component="p" key={name}>{name}</Typography>
                                                :
                                                <Alert className={classes.alert} severity="error">Не указано</Alert>
                                        }
                                    </span>
                            }
                        </Grid>
                        <Grid display='flex' alignItems='center' className={classes.blockData} item xs={9}>
                            <Typography variant="overline" display="block" className={classes.title} gutterBottom>
                                Дата рождения:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={birthday} onChange={(event) => setBirthday(event.target.value)} type='date' />
                                    :
                                    <span>
                                        {
                                            birthday ?
                                                <Typography variant="h6" style={{ marginBottom: 4 }} gutterBottom component="p" key={birthday}>{birthday}</Typography>
                                                :
                                                <Alert className={classes.alert} severity="warning">Не указано</Alert>
                                        }
                                    </span>
                            }
                        </Grid>
                    </Grid>

                    <Grid container columns={16} direction={column}>
                        <Grid display='flex' alignItems='center' className={classes.blockData} item xs={8}>
                            <Typography variant="overline" display="block" className={classes.title} gutterBottom>
                                Пол:
                            </Typography>
                            <span>
                                {
                                    edit ?
                                        <div>
                                            <Button
                                                style={{ width: 'max-content', marginTop: '-4px' }}
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
                                        <Typography variant="h6" style={{ marginBottom: 4 }} gutterBottom component="p" key={gender}>{gender}</Typography>
                                }
                            </span>
                        </Grid>
                        <Grid display='flex' alignItems='center' className={classes.blockData} item xs={8}>
                            <Typography variant="overline" display="block" className={classes.title} gutterBottom>
                                Пароль:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={password} onChange={(event) => setPassword(event.target.value)} />
                                    :
                                    <span>
                                        {
                                            password ?
                                                <Typography variant="h6" className={classes.data} style={{ maxWidth: 165 }} gutterBottom component="p" key={password}>{password}</Typography>
                                                :
                                                <Alert className={classes.alert} severity="error">Не указан</Alert>
                                        }
                                    </span>
                            }
                        </Grid>
                    </Grid>

                    <Grid container columns={16} direction={column}>
                        <Grid display='flex' alignItems='center' className={classes.blockData} item xs={8}>
                            <Typography variant="overline" display="block" className={classes.title} gutterBottom>
                                Телефон:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={phone} onChange={(event) => setPhone(event.target.value)} />
                                    :
                                    <span>
                                        {
                                            phone ?
                                                <Typography variant="h6" className={classes.data} style={{ maxWidth: 180 }} gutterBottom component="p" key={phone}>{phone}</Typography>
                                                :
                                                <Alert className={classes.alert} severity="warning">Не указан</Alert>
                                        }
                                    </span>
                            }
                        </Grid>
                        <Grid display='flex' alignItems='center' className={classes.blockData} item xs={8}>
                            <Typography variant="overline" display="block" className={classes.title} gutterBottom>
                                Почта:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={email} onChange={(event) => setEmail(event.target.value)} />
                                    :
                                    <span>
                                        {
                                            email ?
                                                <Typography variant="h6" className={classes.data} style={{ maxWidth: 200 }} gutterBottom component="p" key={email}>{email}</Typography>
                                                :
                                                <Alert className={classes.alert} severity="error">Не указана</Alert>
                                        }
                                    </span>
                            }
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.footer}>
                    {
                        !edit ?
                            <Button onClick={() => setEdit(true)} variant="outlined">Изменить</Button>
                            :
                            <Button onClick={changeData} variant="outlined">Сохранить</Button>
                    }
                </div>
            </div>
        </Box>
    )
}

export default Info;