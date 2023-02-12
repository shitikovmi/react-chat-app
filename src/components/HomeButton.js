import HomeIcon from '@mui/icons-material/Home';
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import {Tooltip} from "@mui/material";

const HomeButton = () => {

    return (
        <Tooltip title="Home">
            <Link to="/">
                <IconButton>
                    <HomeIcon/>
                </IconButton>
            </Link>
        </Tooltip>
    )
}

export default HomeButton;