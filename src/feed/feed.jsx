import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import FeedCard from './feed-card/feed-card';
import FeedHeader from './feed-header/feed-header';
import { FeedPush } from '../services/services';
import FeedCreat from './feed-card/feed-create';


const Feed = ({ nickname }) => {

    const [cards, setCards] = useState([])
    const [token, setToken] = useState(localStorage.getItem('auth_token'))
    const [search, setSearch] = useState('')
    useEffect(() => {
        FeedPush()
            .then((data) => {
                setCards(JSON.parse(data))
            })
    }, [])

    const findCards = cards.filter(card => {
        return card.title.toLowerCase().includes(search.toLocaleLowerCase())
    })

    if (token) {
        return (
            <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                <FeedHeader setToken={setToken} nickname={nickname} search={search} setSearch={setSearch} />
                <Container>
                    <FeedCreat  cards={cards} setCards={setCards} />
                    <FeedCard cards={cards} setCards={setCards} findCards={findCards} />
                </Container>
            </Box>
        )
    } else return Redirect('/')
}

export default Feed;