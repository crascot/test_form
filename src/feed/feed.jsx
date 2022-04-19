import React, { useState, useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import FeedPost from './posts/posts';
import FeedHeader from './feed-header/feed-header';
import { DB, FeedPush } from '../services/services';
import PostCreate from './posts/posts-create';
import Profile from './profile/profile';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/features/profile/profileSlice';


const Feed = () => {
    const currentUser = DB.users.find(user => user.id === JSON.parse(localStorage.getItem('id')))
    const dispatch = useDispatch()

    const [token] = useState(localStorage.getItem('auth_token'))
    // const token = useSelector(state => state.profile.token) не убирать

    const [search, setSearch] = useState('')
    const [posts, setPosts] = useState([])

    const profile = useSelector(state => state.profile)

    useEffect(() => {
        FeedPush()
            .then((data) => {
                setPosts(JSON.parse(data))
            })
    }, [])
    const findPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(search.toLocaleLowerCase())
    })

    useEffect(() => {
        dispatch(setUser(currentUser))
    }, [dispatch, currentUser])

    if (token) {
        return (
            <Box display="flex" flexWrap="wrap" justifyContent="flex-start" style={{ margin: -8 }}>
                <BrowserRouter basename='test_form/feed'>
                    <Switch>
                        <Route path='/posts' exact>
                            <FeedHeader search={search} setSearch={setSearch} currentUser={currentUser} />
                            <Container>
                                <PostCreate posts={posts} setPosts={setPosts} />
                                <FeedPost posts={posts} setPosts={setPosts} findPosts={findPosts} />
                            </Container>
                        </Route>
                        <Route path='/profile'>
                            <Profile profile={profile} />
                        </Route>
                    </Switch>
                </BrowserRouter>

            </Box>
        )
    } else return Redirect('/')
}

export default Feed;