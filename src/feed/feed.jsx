import React, { useEffect, useState } from 'react';
import {
    Typography,
    Box,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FeedCard from './feed-card/feed-card';
import { FeedPush } from '../services/services';
import Pagination from './feed-card/pagination/pagination';


const useStyles = makeStyles({
    header: {
        marginLeft: '0',
        marginRight: '0',
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    pagination: {
        maxWidth: '100%',
        width: '100%',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-evenly',
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
    const [currentPage, setCurrentPage] = useState(1)
    const cardsLength = 8

    FeedPush()
        .then((data) => {
            setCards(JSON.parse(data))
        })

    function cutCards() {
        return currentCards.map(card => (
            <FeedCard
                id={card.id}
                title={card.title}
                body={card.body}
            />
        ))
    }

    const lastCardIndex = currentPage * cardsLength
    const firstCardsIndex = lastCardIndex - cardsLength
    const currentCards = cards.slice(firstCardsIndex, lastCardIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    if (localStorage.getItem('auth_token')) {
        return (
            <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                <Box className={classes.cards}>{cutCards()}</Box>
                <Box className={classes.pagination}>
                    <Pagination
                        cardsLength={cardsLength}
                        totalCards={cards.length}
                        paginate={paginate}
                    />
                </Box>
                <Box className={classes.footer}><Typography>footer</Typography></Box>
            </Box>
        )
    } else {
        return Redirect('/')
    }
}

export default Feed;