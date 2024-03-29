import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography,
    Button,
    TextField,
} from '@material-ui/core';
import { Menu, MenuItem } from '@mui/material';
import { Redirect } from 'react-router';


const useStyles = makeStyles({
    block: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0dcaf0',
        margin: '0 -15xp',
        padding: '15px'
    },
    left: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    webName: {
        marginRight: 20
    },
    name: {
        fontSize: 25
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

const FeedHeader = ({ search, setSearch, currentUser }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null)
    const [redirect, setRedirect] = useState('/posts')

    const open = Boolean(anchorEl)

    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)
    const profile = () => setRedirect('/profile')
    const leave = () => {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('id')
    }

    return (
        <Box className={classes.block}>
            <div className={classes.left}>
                <Typography variant="h4" className={classes.webName}>Test-Form</Typography>
                <TextField value={search} onChange={(event) => setSearch(event.target.value)} id="filled-basic" label="Поиск..." variant="filled" size="small" />
            </div>
            <div>
                <Button
                    style={{ textTransform: 'capitalize' }}
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Typography variant="body1" className={classes.name}>
                        {currentUser.name}
                    </Typography>
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
                    <MenuItem onClick={profile}><Redirect to={redirect} />Профиль</MenuItem>
                    <a href='https://crascot.github.io/test_form/' onClick={leave} className={classes.link}><MenuItem onClick={leave}>Выйти</MenuItem></a>
                </Menu>
            </div>
        </Box>
    )
}

export default FeedHeader;