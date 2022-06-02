import { configureStore } from '@reduxjs/toolkit'
import calculateReducer from './calculateReducer'

const store = configureStore({
    reducer: {
        counter: calculateReducer
    }
})


export default store