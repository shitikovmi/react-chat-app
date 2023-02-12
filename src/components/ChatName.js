import {Typography} from "@mui/material";
import {useSelector} from "react-redux";


const ChatName = () => {

    const {currentChatId} = useSelector(state => state.chats)

    return (
        <Typography variant="h6" noWrap>
            {currentChatId}
        </Typography>
    )
}

export default ChatName;