import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography,
    Avatar,
} from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
            <Typography>Test-Form</Typography>
            <div className={classes.center}>
                <Link to={'/'}><Typography>Посты</Typography></Link>
                <Link to={'/register'}><Typography>Страны</Typography></Link>
                <Link to={'/'}><Typography>Напитки</Typography></Link>
            </div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
    )
}

export default FeedHeader;