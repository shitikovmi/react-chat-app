import LogoutIcon from "@mui/icons-material/Logout";
import {Tooltip, IconButton} from "@mui/material";
import useFirebase from "../hooks/useFirebase";

const LogOutButton = () => {

    const {authSignOut} = useFirebase();

    return (
        <Tooltip title="Log out">
            <IconButton onClick={authSignOut}>
                <LogoutIcon/>
            </IconButton>
        </Tooltip>
    )
}

export default LogOutButton;