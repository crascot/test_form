import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import User from './user';
import Info from './info';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import './profile.scss';
import { Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';


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

const Profile = ({ profile }) => {
    const classes = useStyles()
    const [column, setColumn] = useState()
    const [display, setDisplay] = useState('none')
    const dispatch = useDispatch()

    const newUser = useSelector(state => state.profile.user)

    useEffect(() => {
        if (window.innerWidth <= 883) setColumn('column')
        if (profile.error) setDisplay('flex')
        else setDisplay('none')
    }, [dispatch, profile.error])

    return (
        <Container className={classes.profile}>
            <Alert variant="filled" severity="error" style={{ display: display }}>
                {profile.error}
            </Alert>

            <Paper elevation={3} className={`${classes.paper} + paper`}>
                <User newUser={newUser} />
                <Info newUser={newUser} column={column} />
            </Paper>
        </Container>
    )
}

export default Profile;