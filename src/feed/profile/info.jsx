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
import { useDispatch, useSelector } from 'react-redux'
import { getChange, editor, setEmail } from '../../redux/features/profile/profileSlice';
import { setName, setBirthday, setGender, setPassword, setPhone } from '../../redux/features/profile/profileSlice';


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

const Info = ({ userData, user, column }) => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const edit = useSelector(state => state.profile.edit)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget)

    if (!userData.gender) dispatch(setGender('Мужской'))
    const handleClose = () => setAnchorEl(null);
    const changeGenderMen = () => {
        setAnchorEl(null);
        dispatch(setGender('Мужской'))
    }
    const changeGenderWomen = () => {
        setAnchorEl(null);
        dispatch(setGender('Женский'))
    }

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
                                    <Input className={classes.input} value={userData.nickname} onChange={(e) => dispatch(setName(e.target.value))} />
                                    :
                                    <Typography variant="h6" className={classes.data} style={{ maxWidth: 180 }} gutterBottom component="p" key={userData.nickname}>{userData.nickname}</Typography>
                            }
                        </Grid>
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={9}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
                                Дата рождения:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={userData.birthday} onChange={(e) => dispatch(setBirthday(e.target.value))} type='date' />
                                    :
                                    <span>
                                        {
                                            user.birthday ?
                                                <Typography variant="h6" style={{ marginBottom: 4 }} gutterBottom component="p" key={userData.birthday}>{userData.birthday}</Typography>
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
                                                {userData.gender}
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
                                        <Typography variant="h6" style={{ marginBottom: 4 }} gutterBottom component="p" key={userData.gender}>{userData.gender}</Typography>
                                }
                            </span>
                        </Grid>
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={8}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
                                Пароль:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={userData.password} onChange={(e) => dispatch(setPassword(e.target.value))} />
                                    :
                                    <Typography variant="h6" className={classes.data} style={{ maxWidth: 165 }} gutterBottom component="p" key={userData.password}>{userData.password}</Typography>
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
                                    <Input className={classes.input} value={userData.phone} onChange={(e) => dispatch(setPhone(e.target.value))} />
                                    :
                                    <span>
                                        {
                                            user.phone ?
                                                <Typography variant="h6" className={classes.data} style={{ maxWidth: 180 }} gutterBottom component="p" key={userData.phone}>{userData.phone}</Typography>
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
                                    <Input className={classes.input} value={userData.email} onChange={(e) => dispatch(setEmail(e.target.value))} />
                                    :
                                    <Typography variant="h6" className={classes.data} style={{ maxWidth: 200 }} gutterBottom component="p" key={userData.email}>{userData.email}</Typography>
                            }
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.footer}>
                    {
                        edit ?
                            <Button onClick={() => dispatch(getChange(userData))} variant="outlined">Сохранить</Button>
                            :
                            <Button onClick={() => dispatch(editor(true))} variant="outlined">Изменить</Button>
                    }
                </div>
            </div>
        </Box>
    )
}

export default Info;