import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography,
    Button,
    TextField
} from '@material-ui/core';
import {
    Alert,
    Menu,
    MenuItem
} from '@mui/material';
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles({
    block: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0dcaf0',
        margin: '0 -15xp',
        padding: '15px'
    },
    center: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '30%',
        textAlign: 'center'
    }
});

const FeedHeader = ({ setToken }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
        setToken(localStorage.removeItem('auth_token'))
    }

    return (
        <Box className={classes.block}>

            <div style={{ width: '100%' }}>
                <Alert severity="warning" style={{ width: 'max-content', margin: '0 auto' }}>Данная часть в разработке</Alert>
            </div>

            <Typography variant="h4">Test-Form</Typography>
            <Router basename='/feed'>
                <div className={classes.center}>
                    <Link to={'/posts'}><Typography>Посты</Typography></Link>
                    <Link to={'/countries'}><Typography>Страны</Typography></Link>
                    <Link to={'/drinks'}><Typography>Напитки</Typography></Link>
                </div>
            </Router>
            <div>
                <Button
                    style={{ textTransform: 'capitalize' }}
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Typography variant="body1">Имя пользователя</Typography>
                </Button>
                <Menu
                    style={{ textAlign: 'center' }}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Выйти</MenuItem>
                </Menu>
            </div>
        </Box>
    )
}

export default FeedHeader;