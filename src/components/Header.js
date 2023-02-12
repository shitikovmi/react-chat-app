import MenuIcon from "@mui/icons-material/Menu";
import {Box, AppBar, IconButton, Toolbar} from "@mui/material";
import AddChatButton from "./AddChatButton";
import ChatName from "./ChatName";
import HomeButton from "./HomeButton";
import {useDispatch, useSelector} from "react-redux";
import {drawerToggle} from "../store/slices/drawerSlice";
import LogOutButton from "./LogOutButton";

const Header = () => {

    const dispatch = useDispatch();

    const {drawerWidth} = useSelector(state => state.drawer)

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }}}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <IconButton
                        onClick={() => dispatch(drawerToggle())}
                        sx={{display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <ChatName/>
                </Box>
                <Box>
                    <AddChatButton/>
                    <HomeButton/>
                    <LogOutButton/>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;