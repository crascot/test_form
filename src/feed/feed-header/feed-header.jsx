import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography,
    Avatar,
} from '@material-ui/core';
import Alert from '@mui/material/Alert';
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

const FeedHeader = () => {
    const classes = useStyles();
    return (
        <Box className={classes.block}>

            <div style={{ width: '100%' }}>
                <Alert severity="warning" style={{ width: 'max-content', margin: '0 auto' }}>Данная часть в разработке</Alert>
            </div>

            <Typography>Test-Form</Typography>
            <Router>
                <div className={classes.center}>
                    <Link to={'/feed'}><Typography>Посты</Typography></Link>
                    <Link to={'/countries'}><Typography>Страны</Typography></Link>
                    <Link to={'/drinks'}><Typography>Напитки</Typography></Link>
                </div>
            </Router>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
    )
}

export default FeedHeader;