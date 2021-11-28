import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import FeedPost from './posts/posts';
import FeedHeader from './feed-header/feed-header';
import { FeedPush } from '../services/services';
import PostCreate from './posts/posts-create';
import Profile from './profile/profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Feed = () => {

    const [posts, setPosts] = useState([])
    const [token, setToken] = useState(localStorage.getItem('auth_token'))
    const [search, setSearch] = useState('')
    useEffect(() => {
        FeedPush()
            .then((data) => {
                setPosts(JSON.parse(data))
            })
    }, [])

    const findPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(search.toLocaleLowerCase())
    })

    if (token) {
        return (
            <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                <BrowserRouter basename='test_form/feed'>
                    <Switch>
                        <Route path='/posts' exact>
                            <FeedHeader setToken={setToken} search={search} setSearch={setSearch} />
                            <Container>
                                <PostCreate posts={posts} setPosts={setPosts} />
                                <FeedPost posts={posts} setPosts={setPosts} findPosts={findPosts} />
                            </Container>
                        </Route>
                        <Route path='/profile'>
                            <Profile />
                        </Route>
                    </Switch>
                </BrowserRouter>

            </Box>
        )
    } else return Redirect('/')
}

export default Feed;