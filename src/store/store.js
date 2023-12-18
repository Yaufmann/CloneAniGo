import {configureStore} from '@reduxjs/toolkit';
import userSlice from './firstSlice'

export default configureStore({
     reducer: {
          user: userSlice,
     }
})