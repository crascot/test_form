import React, { useState } from 'react';
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
        margin: '15px 0 !important',
        padding: 0,
    },
    userStatus: {
        width: '100%',
        height: 'inherit',
        display: 'flex',
        alignItems: 'center',
    },
    menuStatus: {
        margin: '8px !important',
        borderRadius: '5px !important',
        fontWeight: '500 !important',
        color: '#fff !important',
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

const online = green[800];
const offline = red[800];
const Input = styled('input')({
    display: 'none',
});

const User = ({ edit }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [avatar, setAvatar] = useState(null)

    const loadAvatar = (event) => {
        if (!event.target.files.length) {
            return
        }

        const files = Array.from(event.target.files)

        if (!files[0].type.match('image')) {
            return
        }

        const reader = new FileReader()

        reader.onload = ev => {
            setAvatar(ev.target.result)
        }

        reader.readAsDataURL(files[0])
    }

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

    const [about, setAbout] = useState('')
    const checkAbout = event => setAbout(event.target.value)

    return (
        <Box width={320} style={{ marginRight: 8 }}>
            <Card variant="outlined">
                <CardContent>
                    <div>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label htmlFor="contained-button-file" className={classes.avatar}>
                                <Input id="contained-button-file" onClick={loadAvatar} multiple type="file" />
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image={avatar === null ?
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAlUbnpAz36HIeIvG7nKBUHuILO3N2qODJxcAuTUSbrf_WoqiVsVpRcolCGCKu7O7f9Y&usqp=CAU'
                                        :
                                        avatar
                                    }
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
                </CardContent>
            </Card>
        </Box>
    )
}

export default User;