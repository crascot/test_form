import React, { useState } from 'react';
import Container from '@mui/material/Container';
import User from './user';
import Info from './info';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import './profile.scss';
import { Alert } from '@mui/material';

const useStyles = makeStyles({
    profile: {
        maxWidth: 'max-content !important',
        margin: '5% 0 0 0',
    },
    paper: {
        overflow: 'hidden',
        marginTop: '5%',
        display: 'flex',
    }
});

const Profile = ({ feedUser }) => {
    const classes = useStyles();

    const [name, setName] = useState(feedUser.name)
    const [display, setDisplay] = useState('none')
    const [error, setError] = useState()

    const showError = display => error => {
        setDisplay(display);
        setError(error);
    }

    return (
        <Container className={classes.profile}>
            <Alert severity='error' style={{display: display}}>{error}</Alert>
            <Paper elevation={3} className={`${classes.paper} + paper`}>
                <User name={name} />
                <Info feedUser={feedUser} name={name} setName={setName} showError={showError} />
            </Paper>
        </Container>
    )
}

export default Profile;