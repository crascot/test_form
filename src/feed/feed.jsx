import React, { useState } from 'react';
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

    const [id, setId] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
        FeedPush(id, image, title, description)
            .then((cards) => {
                return cards.map(data => <FeedCard id={data.id} image={data.image} title={data.title} description={data.description} />)
            })
    }

    if (localStorage.getItem('auth_token')) {
        return (
            <Box className={classes.header} display="flex" flexWrap="wrap" justifyContent="flex-start">
                {handleSubmit}

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