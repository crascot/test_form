import React, { useState, useEffect } from 'react';
import {
    Typography,
    Box,
    Container,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FeedCard from './feed-card/feed-card';
import FeedHeader from './feed-header/feed-header';
import { FeedPush } from '../services/services';


const useStyles = makeStyles({
    header: {
        marginLeft: '0',
        marginRight: '0',
    },
    footer: {
        maxWidth: '100%',
        width: '100%',
        marginTop: '2rem',
    },
});

const Feed = () => {
    const classes = useStyles();

    const [cards, setCards] = useState([])
    const [token, setToken] = useState(localStorage.getItem('auth_token'))
    useEffect(() => {
        FeedPush()
            .then((data) => {
                setCards(JSON.parse(data))
            })
    }, [])

    if (token) {
        return (
            <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                <FeedHeader setToken={setToken} />
                <Container>
                    <FeedCard cards={cards} setCards={setCards} />
                    <Box className={classes.footer}><Typography>footer</Typography></Box>
                </Container>
            </Box>
        )
    } else return Redirect('/')
}

export default Feed;