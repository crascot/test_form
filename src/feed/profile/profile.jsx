import React, { useState } from 'react';
import Container from '@mui/material/Container';
import User from './user';
import Info from './info';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import { DB, reg } from '../../services/services';

const useStyles = makeStyles({
    profile: {
        maxWidth: 'max-content !important',
        minWidth: 632,
        margin: '10% 0 0 0',
    },
    paper: {
        display: 'flex',
    }
});

const Profile = ({ feedUser }) => {
    const classes = useStyles();

    const [name, setName] = useState(feedUser.name)

    const filtered = DB.users.filter(user => user.name !== feedUser.name ? false : user)

    return (
        <Container className={classes.profile}>
            <Paper elevation={3} className={classes.paper}>
                <User name={name} />
                <Info feedUser={feedUser} name={name} setName={setName} />
            </Paper>
        </Container>
    )
}

export default Profile;