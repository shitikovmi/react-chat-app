import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {Tooltip} from "@mui/material";
import {useDispatch} from "react-redux";
import {chatModalOpen} from "../store/slices/addChatModalSlice";

const AddChatButton = () => {

    const dispatch = useDispatch();

    return (
        <Tooltip title="Add chat">
            <IconButton
            onClick={() => dispatch(chatModalOpen())}>
                <AddBoxIcon/>
            </IconButton>
        </Tooltip>
    )
}

export default AddChatButton;