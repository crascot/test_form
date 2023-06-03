import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { SignIn, CheckIn, DB } from '../../../services/services'


export const initialState = {
    click: false,
    disabled: false,
    loader: 'none',
    redirect: false,

    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',

    errorName: false,
    errorEmail: false,
    errorPassword: false,
    errorConfirmPassword: false,

    nameText: '',
    emailText: '',
    passwordText: '',
    confirmPasswordText: '',
}

export const getLogin = createAsyncThunk(
    'form/getLogin', async (user, { dispatch }) => {
        dispatch(started())
        await SignIn(user.email, user.password)
            .then(() => dispatch(success()))
            .catch(() => { })
            .finally(() => dispatch(finished()))
    }
)

export const getRegister = createAsyncThunk(
    'form/getRegister', async (user, { dispatch }) => {
        const id = JSON.parse(localStorage.getItem('database')).users.length
        dispatch(started())
        await CheckIn(user.nickname, user.email, user.password, user.confirmPassword)
            .then((user) => {
                localStorage.setItem('auth_token', true)
                localStorage.setItem('id', id)

                localStorage.setItem('database', JSON.stringify(user))
                DB.users.push(user)
                localStorage.setItem('database', JSON.stringify(DB))

                dispatch(success())
            })
            .catch(() => { })
            .finally(() => dispatch(finished()))
    }
)

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        started: (state) => {
            state.click = true
            state.disabled = true
            state.loader = 'inherit'
        },
        success: (state) => { state.redirect = !state.redirect },
        finished: (state) => {
            state.disabled = false
            state.loader = 'none'
        },
        setName: (state, action) => { state.nickname = action.payload },
        setEmail: (state, action) => { state.email = action.payload },
        setPassword: (state, action) => { state.password = action.payload },
        setConfirmPassword: (state, action) => { state.confirmPassword = action.payload },
        showErrorName: (state, action) => {
            state.errorName = action.payload.type
            state.nameText = action.payload.text
        },
        showErrorEmail: (state, action) => {
            state.errorEmail = action.payload.type
            state.emailText = action.payload.text
        },
        showErrorPassword: (state, action) => {
            state.errorPassword = action.payload.type
            state.passwordText = action.payload.text
        },
        showErrorConfirmPassword: (state, action) => {
            state.errorConfirmPassword = action.payload.type
            state.confirmPasswordText = action.payload.text
        },
        clear: (state) => {
            state.nickname = ''
            state.email = ''
            state.password = ''
            state.confirmPassword = ''
        },
        clearType: (state) => {
            state.click = false
            state.errorName = false
            state.errorEmail = false
            state.errorPassword = false
            state.errorConfirmPassword = false
            state.nameText = ''
            state.emailText = ''
            state.passwordText = ''
            state.confirmPasswordText = ''
        },
        redirected: (state, action) => { state.redirect = action.payload }
    },
})

export const {
    started, finished, success,
    setName, setEmail, setPassword, setConfirmPassword,
    showErrorName, showErrorEmail, showErrorPassword, showErrorConfirmPassword,
    clear, clearType, redirected,
} = formSlice.actions

export default formSlice.reducer