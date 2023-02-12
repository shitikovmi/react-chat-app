import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentChatId: null,
}

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setCurrentChatId: (state, action) => {
            state.currentChatId = action.payload;
        }
    }
})

export const {setCurrentChatId} = chatsSlice.actions;

export const {reducer} = chatsSlice;