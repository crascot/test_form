import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import User from './user';
import Info from './info';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import './profile.scss';
import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';


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

const Profile = ({ userData }) => {
    const classes = useStyles()
    const [column, setColumn] = useState()
    const error = useSelector(state => state.profile.error)

    const [display, setDisplay] = useState('none')

    useEffect(() => {
        if (window.innerWidth <= 883) setColumn('column')
        if (error) setDisplay('flex')
        else setDisplay('none')
    }, [column, error, setDisplay])

    return (
        <Container className={classes.profile}>
            <Alert variant="filled" severity="error" style={{ display: display }}>
                {error}
            </Alert>

            <Paper elevation={3} className={`${classes.paper} + paper`}>
                <User userData={userData} />
                <Info userData={userData} column={column} />
            </Paper>
        </Container>
    )
}

export default Profile;