import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { changeData } from '../../../services/services'
import { DB } from '../../../services/services'

const initialState = {
  user: {},

  editor: null,
  token: localStorage.getItem('auth_token')
}

export const getChange = createAsyncThunk(
  'profile/getChange', async (user, { dispatch }) => {
    await changeData(user)
      .then(() => {
        let id = JSON.parse(localStorage.getItem('id'))
        let removeUser = DB.users.filter(user => user.id !== JSON.parse(localStorage.getItem('id')))
        localStorage.setItem('database', JSON.stringify(removeUser))

        dispatch(editor(false))

        let newUser = { ...user, id: id }

        const updateDB = {
          users: [...removeUser, newUser]
        }

        localStorage.setItem('database', JSON.stringify(updateDB))
        dispatch(error(null))
      })
      .catch((text) => dispatch(error(text)))
  }
)

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser: (state, action) => { state.user = action.payload },
    editor: (state, action) => { state.edit = action.payload },
    error: (state, action) => { state.error = action.payload }
  }
})

export const { setUser, editor, error } = profileSlice.actions

export default profileSlice.reducer