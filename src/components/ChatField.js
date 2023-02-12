import {Divider, Box, Toolbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useRef} from "react";
import {setCurrentChatId} from "../store/slices/chatsSlice";
import SendMessageForm from "./SendMessageForm";
import Message from "./Message";
import Error from "./Error";
import {useNavigate} from "react-router-dom";

import useFirebase from "../hooks/useFirebase";

const ChatField = () => {

    const dispatch = useDispatch()
    const {drawerWidth} = useSelector(state => state.drawer);
    const navigate = useNavigate();
    const {id} = useParams();
    const scrollIntoViewRef = useRef();
    const {
        observeDataChanging,
        data,
        error,
        observeAuthStateChanging
    } = useFirebase();

    useEffect(() => {
        dispatch(setCurrentChatId(id));
        const dataConverter = data => (
            Object.entries(data.val()).map(([key, value]) => ({[key]: value}))
        )
        const path = `chats/${id}`;
        observeDataChanging(path, dataConverter);
    }, [id])

    useEffect(() => {
        if (!scrollIntoViewRef) return
        scrollIntoViewRef.current.scrollIntoView({behavior: 'smooth'});
    })

    useEffect(() => {
        observeAuthStateChanging(navigate);
    })

    const contentElements = !error ?
    <Box sx={{height: '100%'}}>
        {
            data.map((message) => {
                const messageFirebaseKey = Object.keys(message)[0];
                const messageData = message[messageFirebaseKey];
                return (
                    <Message
                        name={messageData.username}
                        text={messageData.text}
                        key={messageFirebaseKey}
                        firebaseKey={messageFirebaseKey}
                        photoURL={messageData.photoURL}/>
                )
            })
        }
    </Box> : null;
    const errorElement = error ? <Error/> : null;

    return (
            <Box sx={{width: { sm: `calc(100% - ${drawerWidth}px)`,
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh'}}}>
                <Toolbar/>
                {contentElements}
                {errorElement}
                <Divider/>
                <SendMessageForm drawerWidth={drawerWidth}/>
                <span ref={scrollIntoViewRef}></span>
            </Box>
    )
}

export default ChatField;