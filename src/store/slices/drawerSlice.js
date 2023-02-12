import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    drawerWidth: 240,
    mobileOpen: false
}

const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        drawerToggle: (state) => {
            state.mobileOpen = !state.mobileOpen
        }
    }
})

export const {drawerToggle} = drawerSlice.actions;

export const {reducer} = drawerSlice;