import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    arr: [],
}

const accordArr = createSlice({
     name: "accord",
     initialState,
     reducers: {
        addUser(state,action) {
           state.arr.push({
               id: Date.now(),
               name: action.payload.name,
               email: action.payload.email,
           })
        },
        removeUser(state, action) {
            state.arr = state.arr.filter(user => user.id !== action.payload.id)
        }
     },
});
export const {addUser,removeUser} = accordArr.actions;
export default accordArr.reducer