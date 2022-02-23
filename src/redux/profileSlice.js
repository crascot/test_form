import { createSlice } from '@reduxjs/toolkit'
import { changeData } from '../services/services'
import { DB } from '../services/services'

export const profileSlice = createSlice({
  name: 'data',
  initialState: {
    edit: false
  },
  reducers: {
    change: (state, action) => {
      changeData(action.payload.name, action.payload.birthday, action.payload.gender, action.payload.password, action.payload.phone, action.payload.email)
        .then(() => {
          let removeUser = DB.users.filter(user => user.id !== JSON.parse(localStorage.getItem('id')))
          localStorage.setItem('database', JSON.stringify(removeUser));

          let newUser = {
            id: JSON.parse(localStorage.getItem('id')),
            name: action.payload.name,
            birthday: action.payload.birthday,
            gender: action.payload.gender,
            password: action.payload.password,
            phone: action.payload.phone,
            email: action.payload.email
          }

          const updateDB = {
            users: [...removeUser, newUser]
          }

          localStorage.setItem('database', JSON.stringify(updateDB));
        })
        .catch((text) => alert(text))
      state.edit = !state.edit
    },
    editor: (state, action) => {
      state.edit = action.payload
    }
  }
})

export const { change, editor } = profileSlice.actions

export default profileSlice.reducer