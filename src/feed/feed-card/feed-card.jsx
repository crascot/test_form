import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOff from '@material-ui/icons/HighlightOff';
import { FeedPush } from '../../services/services';
import Pagination from '../feed-card/pagination/pagination';


const useStyles = makeStyles({
    block: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        minWidth: 280,
        maxWidth: 280,
        marginTop: '2rem',
        margin: '0 14px',
    },
    icon: {
        marginTop: '9px',
        marginLeft: '88%',
        cursor: 'pointer',
    },
    header: {
        borderBottom: '3px solid #0dcaf0'
    },
    date: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    pagination: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
    },
});

const FeedCard = () => {
    const classes = useStyles();

    const [cards, setCards] = useState([])
    const [cardId, setCardId] = useState()
    const [currentPage, setCurrentPage] = useState(1)

    let cardsLength = 8
    const lastCardIndex = currentPage * cardsLength
    const firstCardsIndex = lastCardIndex - cardsLength

    useEffect(() => {
        FeedPush()
            .then((data) => {
                setCards(JSON.parse(data))
            })
    }, [])

    const deleteCard = (thisId) => {
        setCardId(thisId)
        setCards(cards.filter((el) => el.id !== cardId))
    }

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <Box className={classes.block}>
            {
                cards.map((props) => (
                    <Card className={classes.card} id={props.id} key={Math.random()}>
                        <HighlightOff className={classes.icon} onClick={() => deleteCard(props.id)} />
                        <CardContent>
                            <Typography className={classes.header} gutterBottom variant="h5" component="h2">
                                {props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.body}
                            </Typography>
                            <Typography className={classes.date} variant="button">
                                {new Date().toLocaleDateString()}
                            </Typography>
                        </CardContent>
                    </Card>
                )).slice(firstCardsIndex, lastCardIndex)
            }
            <Pagination
                cardsLength={cardsLength}
                totalCards={cards.length}
                paginate={paginate}
            />
        </Box>
    )
}

export default FeedCard;

