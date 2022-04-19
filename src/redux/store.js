import { configureStore } from '@reduxjs/toolkit'
import formSlice from './features/form/formSlice'
import profileReducer from './features/profile/profileSlice'

export default configureStore({
  reducer: {
    profile: profileReducer,
    form: formSlice,
  }
})