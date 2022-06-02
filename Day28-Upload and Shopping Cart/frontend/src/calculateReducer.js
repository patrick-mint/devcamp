import { createSlice } from '@reduxjs/toolkit'
export const calculateReducer = createSlice({
    name: 'calculate',
    initialState: {data:[]},
    reducers: {
        initState: (state, action) => {
            state.data = action.payload;
        },
        create: (state, action) => {
            console.log(action.payload);
            state.data.push(action.payload);
        },
        update: (state, action) => {
            const targetIndex = state.data.findIndex((row) => action.payload.id == row.id);
            if (targetIndex != -1)
                state.data[targetIndex] = action.payload;
        },
        del: (state, action) => {
            const targetIndex = state.data.length -1
            // console.log(targetIndex);
            // console.log(state.data[targetIndex]);      
            // state.data.splice(0, 1);
            state.data.splice(targetIndex, 1);

        }
    }
})
export default calculateReducer.reducer
export const { initState, create, update, del } = calculateReducer.actions


