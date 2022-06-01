import { createSlice } from '@reduxjs/toolkit'
export const calculateReducer = createSlice({
    // ชื่อตัว Reducer
    name: 'calculate',
    // ชื่อตัว ค่าเริ่มต้นของ State
    initialState: {
        salary: "ไทยแลนด์"
    },
    // ชื่อ Action ใน Reducer
    reducers: {
        increment: state => {
            state.salary += 1000
        },
        decrement: state => {
            state.salary -= 1000
        },
        secret: state => {
            state.salary = "Secret"
        },
        setDefault: state => {
            state.salary = 18000
        }
    }
})
// Export Reducer
export default calculateReducer.reducer
// Export Action ที่สามารถใช้ได้ใน Reducer
export const { increment, decrement, secret, setDefault } = calculateReducer.actions

