import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filter: ''
}

const drawerSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
})

export const {setFilter} = drawerSlice.actions;

export const {reducer} = drawerSlice;