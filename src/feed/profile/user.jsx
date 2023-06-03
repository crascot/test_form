import React, { useState } from 'react';
import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Divider,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    user: {
        width: 300,
        minWidth: 150,
    },
    label: {
        margin: '0 auto',
    },
    avatar: {
        borderRadius: '30px',
        cursor: 'pointer',
    },
    name: {
        textAlign: 'center',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
        overflow: 'hidden',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

const Input = styled('input')({
    display: 'none',
});

const User = ({ newUser }) => {
    const classes = useStyles();

    const [avatar, setAvatar] = useState(null)
    const loadAvatar = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader()

        reader.onload = e => setAvatar(e.target.result)
        reader.readAsDataURL(file)
    }

    const leave = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('auth_token')
    }

    return (
        <Card className={`${classes.user} + user`}>
            <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="contained-button-file" className={classes.label}>
                    <Input id="contained-button-file" onChange={loadAvatar} multiple type="file" />
                    <CardMedia className={classes.avatar}
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
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className={classes.name}
                >
                    {newUser.nickname}
                </Typography>
            </CardContent>

            <Divider />

            <MenuList className={`${classes.option} + option`}>
                <Link to='/posts' className={classes.link}>
                    <MenuItem>
                        <ListItemIcon>
                            <FeedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Посты</ListItemText>
                    </MenuItem>
                </Link>
                <a href='https://crascot.github.io/test_form/' onClick={leave} className={classes.link}>
                    <MenuItem>
                        <ListItemIcon>
                            <LogoutIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Выйти</ListItemText>
                    </MenuItem>
                </a>
            </MenuList>
        </Card>
    )
}

export default User;