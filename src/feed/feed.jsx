import React, { useEffect, useState } from 'react';
import {
    Typography,
    Box,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FeedCard from './feed-card';
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

    const[cards, setCards] = useState([])

    FeedPush()
    .then((data) => {
        setCards(JSON.parse(data))
    })

    if (localStorage.getItem('auth_token')) {
        return (
            <Box className={classes.header} display="flex" flexWrap="wrap" justifyContent="flex-start">

                {cards.map(card => <FeedCard id={card.id} title={card.title} body={card.body} />)}

                <Box className={classes.footer}>
                    <Typography>footer</Typography>
                </Box>
            </Box>
        )
    } else {
        return Redirect('/')
    }
}

export default Feed;