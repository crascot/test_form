import React, { useState, useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import FeedPost from './posts/posts';
import FeedHeader from './feed-header/feed-header';
import { DB, FeedPush } from '../services/services';
import PostCreate from './posts/posts-create';
import Profile from './profile/profile';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setBirthday, setGender, setPassword, setPhone, setEmail } from '../redux/features/profile/profileSlice';


const Feed = () => {
    const user = DB.users.find(user => user.id === JSON.parse(localStorage.getItem('id')))
    const dispatch = useDispatch()

    const [token] = useState(localStorage.getItem('auth_token'))
    const [search, setSearch] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        FeedPush()
            .then((data) => {
                setPosts(JSON.parse(data))
            })
    }, [])
    const findPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(search.toLocaleLowerCase())
    })

    const userData = {
        nickname: useSelector(state => state.profile.nickname),
        birthday: useSelector(state => state.profile.birthday),
        gender: useSelector(state => state.profile.gender),
        password: useSelector(state => state.profile.password),
        phone: useSelector(state => state.profile.phone),
        email: useSelector(state => state.profile.email)
    }

    useEffect(() => {
        dispatch(setName(user.name))
        dispatch(setBirthday(user.birthday))
        dispatch(setGender(user.gender))
        dispatch(setPassword(user.password))
        dispatch(setPhone(user.phone))
        dispatch(setEmail(user.email))
    }, [dispatch, user.name, user.birthday, user.gender, user.password, user.phone, user.email])

    if (token) {
        return (
            <Box display="flex" flexWrap="wrap" justifyContent="flex-start" style={{ margin: -8 }}>
                <BrowserRouter basename='test_form/feed'>
                    <Switch>
                        <Route path='/posts' exact>
                            <FeedHeader search={search} setSearch={setSearch} userData={userData} />
                            <Container>
                                <PostCreate posts={posts} setPosts={setPosts} />
                                <FeedPost posts={posts} setPosts={setPosts} findPosts={findPosts} />
                            </Container>
                        </Route>
                        <Route path='/profile'>
                            <Profile userData={userData} />
                        </Route>
                    </Switch>
                </BrowserRouter>

            </Box>
        )
    } else return Redirect('/')
}

export default Feed;