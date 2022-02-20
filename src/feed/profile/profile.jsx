import React, { useState } from 'react';
import Container from '@mui/material/Container';
import User from './user';
import Info from './info';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import './profile.scss';

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

    return (
        <Container className={classes.profile}>
            <Paper elevation={3} className={`${classes.paper} + paper`}>
                <User name={name} />
                <Info feedUser={feedUser} name={name} setName={setName} />
            </Paper>
        </Container>
    )
}

export default Profile;