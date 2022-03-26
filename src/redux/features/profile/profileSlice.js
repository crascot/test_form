import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { changeData } from '../../../services/services'
import { DB } from '../../../services/services'

const initialState = {
  nickname: '',
  birthday: '',
  gender: 'Мужской',
  password: '',
  phone: '',
  email: '',

  editor: null,
}

export const getChange = createAsyncThunk(
  'profile/getChange', function (userData, { dispatch }) {
    changeData(userData.nickname, userData.birthday, userData.gender, userData.password, userData.phone, userData.email)
      .then(() => {
        let id = JSON.parse(localStorage.getItem('id'))
        let removeUser = DB.users.filter(user => user.id !== JSON.parse(localStorage.getItem('id')))
        localStorage.setItem('database', JSON.stringify(removeUser))
        
        dispatch(editor(false))

        let newUser = {
          id: id,
          name: userData.nickname,
          birthday: userData.birthday,
          gender: userData.gender,
          password: userData.password,
          phone: userData.phone,
          email: userData.email
        }

        const updateDB = {
          users: [...removeUser, newUser]
        }

        localStorage.setItem('database', JSON.stringify(updateDB));
        dispatch(error(null))
      })
      .catch((text) => dispatch(error(text)))
  }
)

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action) => {  state.nickname = action.payload },
    setBirthday: (state, action) => { state.birthday = action.payload },
    setGender: (state, action) => { state.gender = action.payload },
    setPassword: (state, action) => { state.password = action.payload },
    setPhone: (state, action) => { state.phone = action.payload },
    setEmail: (state, action) => { state.email = action.payload },

    editor: (state, action) => { state.edit = action.payload },
    error: (state, action) => { state.error = action.payload }
  }
})

export const { setName, setBirthday, setGender, setPassword, setPhone, setEmail, editor, error } = profileSlice.actions

export default profileSlice.reducer