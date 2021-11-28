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
import Pagination from './pagination/pagination';



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
    },
    noPosts: {
        marginTop: 20,
    },
    icon: {
        marginTop: '9px',
        marginLeft: '88%',
        cursor: 'pointer',
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    title: {
        width: '100%',
        borderBottom: '3px solid #0dcaf0',
        marginBottom: 4
    },
    body: {
        width: '100%',
    },
    save: {
        width: '100%',
        textAlign: 'right',
        marginTop: 5,
    },
    pagination: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
    }
});

const Posts = ({ posts, setPosts, findPosts }) => {
    const classes = useStyles();

    const [edit, setEdit] = useState(null)
    const [valueTitle, setValueTitle] = useState('')
    const [valueBody, setValueBody] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    let postsLength = 8
    const lastPostIndex = currentPage * postsLength
    const firstPostsIndex = lastPostIndex - postsLength

    const deletePost = (id) => setPosts(posts.filter((el) => el.id !== id))

    const editPost = (id, title, body) => {
        setEdit(id)
        setValueTitle(title)
        setValueBody(body)
    }
    const savePost = (id) => {
        let newPost = posts.map(item => {
            if (item.id === id) {
                item.title = valueTitle
                item.body = valueBody
            }
            return item
        })

        setPosts(newPost)
        setEdit(null)
    }

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <Box className={classes.block}>
            {
                posts.length === 0 ?
                    <Typography variant="h3" className={classes.noPosts}>Посты закончились</Typography>
                    :
                    findPosts.length === 0 ?
                        <Typography variant="h3" className={classes.noPosts}>Пост не найден</Typography>
                        :
                        findPosts.map((props) => (
                            <Card className={classes.post} id={props.id} key={props.id}>
                                <HighlightOff className={classes.icon} onClick={() => deletePost(props.id)} />
                                <CardContent className={classes.content}>
                                    <div className={classes.title}>
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
                                                <Button onClick={() => savePost(props.id)} size='small'>Сохранить</Button>
                                                :
                                                <Button onClick={() => editPost(props.id, props.title, props.body)}>Редактировать</Button>
                                        }
                                    </Typography>
                                </CardContent>
                            </Card>
                        )).slice(firstPostsIndex, lastPostIndex)
            }
            <Pagination
                postsLength={postsLength}
                totalPosts={findPosts.length}
                paginate={paginate}
            />
        </Box>
    )
}

export default Posts;