import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    email: null,
    token: null,
    id: null
}

const userSlice = createSlice({
     name: "user",
     initialState,
     reducers: {
        Auth(state) {
            state.isAuth = !state.isAuth
        },
        addUser(state,action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
     },
});
export const {addUser,removeUser,Auth} = userSlice.actions;
export default userSlice.reducer