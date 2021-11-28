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


const useStyles = makeStyles({
    block: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    post: {
        minWidth: 280,
        maxWidth: 280,
        marginTop: '2rem',
        margin: '0 14px',
        padding: 15,
        textAlign: 'center',
    },
    center: {
        lineHeight: 4
    },
    input: {
        lineHeight: 30
    }
});

const PostCreate = ({ posts, setPosts }) => {
    const classes = useStyles();

    const [titleText, setTitleText] = useState('')
    const [bodyText, setBodyText] = useState('')

    const addPosts = () => {
        if (titleText.trim() && bodyText.trim()) {

            let newPost = {
                id: Math.random() * posts.length,
                title: titleText,
                body: bodyText
            }

            setPosts([newPost, ...posts])

            setTitleText('')
            setBodyText('')
        } else alert('Заполните поле')
    }

    return (
        <Box className={classes.block}>
            <Card className={classes.post}>
                <Typography variant='h6'>Добавить пост</Typography>
                <CardContent className={classes.center}>
                    <TextField className={classes.input} fullWidth label="Заголовок" value={titleText} onChange={(v) => setTitleText(v.target.value)} type='text' />
                    <TextField className={classes.input} fullWidth label="Содержание" value={bodyText} onChange={(v) => setBodyText(v.target.value)} type='text' />
                </CardContent>
                <Button onClick={addPosts} size='large'>Сохранить</Button>
            </Card>
        </Box>
    )
}

export default PostCreate;