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
      let findUser = DB.users.find(user => user.id === JSON.parse(localStorage.getItem('id')))
      const filtered = DB.users.filter(user => user.email !== findUser.email ? false : user)
      changeData(action.payload.name, action.payload.birthday, action.payload.gender, action.payload.password, action.payload.phone, action.payload.email)
        .then(() => {
          filtered.forEach(user => {
            if (action.payload.name) user.name = action.payload.name
            if (action.payload.birthday) user.birthday = action.payload.birthday
            if (action.payload.gender) user.gender = action.payload.gender
            if (action.payload.password) user.password = action.payload.password
            if (action.payload.phone) user.phone = action.payload.phone
            if (action.payload.email) user.email = action.payload.email
            localStorage.setItem('database', JSON.stringify(DB))
          })
        }).catch((text) => alert(text))
      state.edit = !state.edit
    },
    editor: (state, action) => {
      state.edit = action.payload
    }
  }
})

export const { change, editor } = profileSlice.actions

export default profileSlice.reducer