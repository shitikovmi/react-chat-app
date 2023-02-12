import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    photoURL: ''
}

const drawerSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.username = action.payload;
        },
        setUserPhotoURL: (state, action) => {
            state.photoURL = action.payload;
        },
        clearUser: state => {
            state.username = '';
            state.photoURL = '';
        }
    }
})

export const {setUserName, setUserPhotoURL, clearUser} = drawerSlice.actions;

export const {reducer} = drawerSlice;