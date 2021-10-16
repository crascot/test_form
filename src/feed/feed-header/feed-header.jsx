import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography,
    Avatar,
} from '@material-ui/core';

const useStyles = makeStyles({
    block: {
        maxWidth: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0dcaf0',
        margin: '0 -15xp',
        padding: '0 15px'
    }
});

const FeedHeader = () => {
    const classes = useStyles();
    return (
        <Box className={classes.block}>
            <Typography>Test-Form</Typography>
            <ul >
                <Typography>Домой</Typography>
                <Typography>Домой</Typography>
                <Typography>Домой</Typography>
            </ul>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
    )
}

export default FeedHeader;