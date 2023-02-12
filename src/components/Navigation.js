import {Drawer as MuiDrawer} from "@mui/material";
import Box from "@mui/material/Box";
import {useSelector, useDispatch} from "react-redux";
import {drawerToggle} from "../store/slices/drawerSlice";
import NavigationContent from "./NavigationContent";

const Navigation = ({window}) => {
    const container = window !== undefined ? () => window().document.body : undefined;

    const dispatch = useDispatch();

    const {mobileOpen, drawerWidth} = useSelector(state => state.drawer)

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }}}>
            <MuiDrawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={() => dispatch(drawerToggle())}
                ModalProps={{keepMounted: true,}}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }}}>
                <NavigationContent/>
            </MuiDrawer>
            <MuiDrawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }}}
                open>
                <NavigationContent/>
            </MuiDrawer>
        </Box>
    )
}

export default Navigation;