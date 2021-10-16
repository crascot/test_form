import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Box,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOff from '@material-ui/icons/HighlightOff';
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
    body: {
        borderTop: '3px solid #0dcaf0',
        paddingTop: 4
    },
    save: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 5,
    },
    pagination: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
    }
});

const FeedCard = ({ cards, setCards }) => {
    const classes = useStyles();

    const [edit, setEdit] = useState(null)
    const [valueTitle, setValueTitle] = useState('')
    const [valueBody, setValueBody] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    let cardsLength = 8
    const lastCardIndex = currentPage * cardsLength
    const firstCardsIndex = lastCardIndex - cardsLength

    const deleteCard = (id) => {
        setCards(cards.filter((el) => el.id !== id))
    }
    const editCard = (id, title, body) => {
        setEdit(id)
        setValueTitle(title)
        setValueBody(body)
    }
    const saveCard = (id) => {
        let newCard = cards.map(item => {
            if (item.id === id) {
                item.title = valueTitle
                item.body = valueBody
            }
            return item
        })
        setCards(newCard)
        setEdit(null)
    }

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <Box className={classes.block}>
            {
                cards.map((props) => (
                    <Card className={classes.card} id={props.id} key={props.id}>
                        <HighlightOff className={classes.icon} onClick={() => deleteCard(props.id)} />
                        <CardContent>
                            <div>
                                {
                                    edit === props.id ? <div>
                                        <TextField value={valueTitle} onChange={(e) => setValueTitle(e.target.value)} fullWidth multiline />
                                    </div>
                                        :
                                        <Typography
                                            gutterBottom variant="h5"
                                            component="h2"
                                        >
                                            {props.title}
                                        </Typography>
                                }
                            </div>
                            <div className={classes.body}>
                                {
                                    edit === props.id ? <div>
                                        <TextField value={valueBody} onChange={(e) => setValueBody(e.target.value)} fullWidth multiline />
                                    </div>
                                        :
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            {props.body}
                                        </Typography>
                                }
                            </div>
                            <Typography className={classes.save} variant="button">
                                {
                                    edit === props.id ?
                                        <Button onClick={() => saveCard(props.id)} size='small'>Сохранить</Button>
                                        :
                                        <Button onClick={() => editCard(props.id, props.title, props.body)}>Редактировать</Button>
                                }
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