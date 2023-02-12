import {Box} from '@mui/material';
import Header from "../components/Header";
import ChatField from "../components/ChatField";
import Navigation from "../components/Navigation";
import AddChatModal from "../components/AddChatModal";
import ErrorBoundary from "../components/ErrorBoundary";

const ChatPage = () => {

    return (
        <ErrorBoundary>
            <Box sx={{display: 'flex'}}>
                <Header/>
                <Navigation/>
                <ChatField/>
                <AddChatModal/>
            </Box>
        </ErrorBoundary>
    )
}

export default ChatPage;