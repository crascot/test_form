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
import { DB } from '../services/services';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Feed = () => {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('id')))
    const [token, setToken] = useState(localStorage.getItem('auth_token'))
    const [search, setSearch] = useState('')
    const [posts, setPosts] = useState([])

    let findUser = DB.users.find(user => user.id === userId)
    const [feedUser] = useState(findUser)

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
                            <FeedHeader setToken={setToken} search={search} setSearch={setSearch} setUserId={setUserId} name={feedUser.name} />
                            <Container>
                                <PostCreate posts={posts} setPosts={setPosts} />
                                <FeedPost posts={posts} setPosts={setPosts} findPosts={findPosts} />
                            </Container>
                        </Route>
                        <Route path='/profile'>
                            <Profile feedUser={feedUser} />
                        </Route>
                    </Switch>
                </BrowserRouter>

            </Box>
        )
    } else return Redirect('/')
}

export default Feed;