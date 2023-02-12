import { configureStore } from '@reduxjs/toolkit'
import {reducer as drawer} from "./slices/drawerSlice";
import {reducer as chatModal} from "./slices/addChatModalSlice";
import {reducer as chats} from "./slices/chatsSlice";
import {reducer as user} from "./slices/userSlice"
import {reducer as filter} from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        drawer,
        chatModal,
        chats,
        user,
        filter
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;