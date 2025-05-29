import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:null,
  loading:true
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.user=action.payload
        state.loading=false
     
    },
    clearUser: (state, action) => {
        state.user=null
        state.loading=false
    },
    setLoading: (state, action) => {
     state.loading=action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setUser,clearUser,setLoading } = authSlice.actions

export default authSlice.reducer
