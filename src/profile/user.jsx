import React, { useState, useEffect } from 'react';
import {
    Box,
    Alert,
    Typography,
    TextField,
    Button,
    Card,
    CardMedia,
    CardContent,
    Menu,
    MenuItem,
    Fade,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SaveIcon from '@mui/icons-material/Save';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@mui/material/colors';

const useStyles = makeStyles({
    avatar: {
        width: 'max-content',
        margin: '0 auto',
        cursor: 'pointer',
    },
    status: {
        width: '100%',
        height: 20,
        margin: '15px 0',
        padding: 0,
    },
    userStatus: {
        width: '100%',
        height: 'inherit',
        display: 'flex',
        alignItems: 'center',
    },
    menuStatus: {
        margin: '8px',
        borderRadius: 5,
        fontWeight: 500,
        color: '#fff',
    },
    aboutMe: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 500,
        color: 'gray',
        marginBottom: 0
    },

    icon: {
        marginRight: 7
    },
    center: {
        display: 'flex',
        alignItems: 'center',
    }
});

const online = green[800]
const offline = red[800]

const User = () => {
    const classes = useStyles();
    const Input = styled('input')({
        display: 'none',
    });

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [avatar, setAvatar] = useState('')

    const [status, setStatus] = useState('')
    const [statusColor, setStatusColor] = useState('')
    const checkStatus = status => color => {
        setStatus(status)
        setStatusColor(color)
    }
    const handleOnline = () => {
        checkStatus('Online')('success')

        setAnchorEl(null);
    }
    const handleOffline = () => {
        checkStatus('Offline')('error')

        setAnchorEl(null);
    }

    const [edit, setEdit] = useState(false)
    const editUser = () => {
        if (edit === true) setEdit(false)
        else setEdit(true)
    }
    const [about, setAbout] = useState('')
    const checkAbout = event => setAbout(event.target.value)

    return (
        <Box width={320}>
            <Card variant="outlined">
                <CardContent>
                    <div>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label htmlFor="contained-button-file" className={classes.avatar}>
                                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image={avatar === true ?
                                        avatar
                                        :
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAlUbnpAz36HIeIvG7nKBUHuILO3N2qODJxcAuTUSbrf_WoqiVsVpRcolCGCKu7O7f9Y&usqp=CAU'}
                                    alt="Avatar"
                                />
                            </label>
                        </Stack>

                        <Button
                            className={classes.status}
                            id="fade-button"
                            aria-controls="fade-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <Alert
                                severity={statusColor ? statusColor : setStatusColor('success')}
                                icon={false} variant="filled"
                                className={classes.userStatus}
                            >
                                {status ? status : setStatus('Online')}
                            </Alert>
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleOnline} className={classes.menuStatus} style={{ backgroundColor: online }}>Online</MenuItem>
                            <MenuItem onClick={handleOffline} className={classes.menuStatus} style={{ backgroundColor: offline }}>Offline</MenuItem>
                        </Menu>
                    </div>

                    <div>
                        <Typography className={classes.aboutMe} variant="h5" gutterBottom component="div"><PersonIcon /> Обо мне</Typography>
                        {
                            edit === true ?
                                <TextField
                                    value={about}
                                    onChange={checkAbout}
                                    style={{ marginBottom: 5.6 }}
                                    id="standard-multiline-static"
                                    multiline
                                    defaultValue="Default Value"
                                    fullWidth
                                />
                                :
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    {
                                        about ? about :
                                            <Alert
                                                className={classes.center}
                                                severity='warning'
                                            >
                                                Данный пункт не заполнен, вы можете заполнить его нажав на "Изменить профиль"
                                            </Alert>
                                    }
                                </Typography>
                        }
                    </div>
                    <div>
                        {
                            edit === true ?
                                <Button onClick={editUser} variant="contained" fullWidth><SaveIcon className={classes.icon} /> Сохранить</Button>
                                :
                                <Button onClick={editUser} variant="contained" fullWidth><BorderColorIcon className={classes.icon} /> Изменить профиль</Button>
                        }
                    </div>
                </CardContent>
            </Card>
        </Box>
    )
}

export default User;