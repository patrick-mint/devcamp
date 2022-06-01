import { configureStore } from '@reduxjs/toolkit'
import createReducer from './createReducer'

const store = configureStore({
    reducer: {
        counter: createReducer,
    }
})

export default store
