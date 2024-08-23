import {configureStore} from '@reduxjs/toolkit';
import dashBoardSlice from './features/dashBoardSlice'

export const store = configureStore({
reducer:dashBoardSlice,
}
    )