import { createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom'

const initialState = {
  value: localStorage.getItem("loggedinUser")? JSON.parse(localStorage.getItem("loggedinUser")): null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  //  logedinUser: "ami login tamim"
   logedinUser: (state, action) => {
    state.value = action.payload
  },
  },
})

export const { logedinUser } = authSlice.actions

export default authSlice.reducer