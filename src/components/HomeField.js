import {Box, Typography} from "@mui/material";
import useFirebase from "../hooks/useFirebase";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {setCurrentChatId} from "../store/slices/chatsSlice";


const HomeField = () => {

    const {observeAuthStateChanging} = useFirebase();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setCurrentChatId(''));
        observeAuthStateChanging(navigate);
    });

    return (
        <Box
            sx={{p: 3, width: '100%' ,display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'} }>
            <Typography
                sx={{
                    borderRadius: '10px',
                    padding: '5px 10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    textAlign: 'center'
                }}>
                Select the chat in which you would like to write
            </Typography>
        </Box>
    )
}

export default HomeField;