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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { change, editor } from '../../redux/profileSlice'


const useStyles = makeStyles({
    info: {
        margin: '30px 15px',
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
    },
});

const Info = ({ feedUser, name, setName }) => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const edit = useSelector(state => state.profile.edit)

    const [column, setColumn] = useState()

    const [birthday, setBirthday] = useState(feedUser.birthday)
    const [gender, setGender] = useState(feedUser.gender)
    const [password, setPassword] = useState(feedUser.password)
    const [phone, setPhone] = useState(feedUser.phone)
    const [email, setEmail] = useState(feedUser.email)

    if (!gender) setGender('Мужской')

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
        <Box className={`${classes.info} + info`}>
            <div>
                <Typography variant="h3" component="div" gutterBottom className={`${classes.mainTitle} + main-title`}>
                    Персональные данные
                </Typography>

                <div className='container-data'>
                    <Grid container columns={16} direction={column}>
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={7}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
                                Имя:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={name} onChange={(event) => setName(event.target.value)} />
                                    :
                                    <Typography variant="h6" className={classes.data} style={{ maxWidth: 180 }} gutterBottom component="p" key={name}>{name}</Typography>
                            }
                        </Grid>
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={9}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
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
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={8}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
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
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={8}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
                                Пароль:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={password} onChange={(event) => setPassword(event.target.value)} />
                                    :
                                    <Typography variant="h6" className={classes.data} style={{ maxWidth: 165 }} gutterBottom component="p" key={password}>{password}</Typography>
                            }
                        </Grid>
                    </Grid>

                    <Grid container columns={16} direction={column}>
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={8}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
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
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={8}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
                                Почта:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={email} onChange={(event) => setEmail(event.target.value)} />
                                    :
                                    <Typography variant="h6" className={classes.data} style={{ maxWidth: 200 }} gutterBottom component="p" key={email}>{email}</Typography>
                            }
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.footer}>
                    {
                        !edit ?
                            <Button onClick={() => dispatch(editor(true))} variant="outlined">Изменить</Button>
                            :
                            <Button onClick={() => dispatch(change({ name, birthday, gender, password, phone, email }))} variant="outlined">Сохранить</Button>
                    }
                </div>
            </div>
        </Box>
    )
}

export default Info;