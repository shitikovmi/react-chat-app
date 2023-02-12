import {Box} from '@mui/material';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AddChatModal from "../components/AddChatModal";
import HomeField from "../components/HomeField";
import ErrorBoundary from "../components/ErrorBoundary";

const HomePage = () => {

    return (
        <ErrorBoundary>
            <Box sx={{ display: 'flex'}}>
                <Header/>
                <Navigation/>
                <HomeField/>
                <AddChatModal/>
            </Box>
        </ErrorBoundary>
    );
}

export default HomePage;