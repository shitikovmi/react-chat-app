import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false
}

const chatModalSlice = createSlice({
    name: 'chatModal',
    initialState,
    reducers: {
        chatModalOpen: (state) => {
            state.open = true;
        },
        chatModalClose: (state) => {
            state.open = false;
        }
    }
})

export const {chatModalOpen, chatModalClose} = chatModalSlice.actions;

export const {reducer} = chatModalSlice;