import {Avatar, Stack, Typography, Box} from "@mui/material";
import {MenuItem, Menu} from "@mui/material";
import {useSelector} from "react-redux";
import useContextMenu from "../hooks/useContextMenu";

const Message = ({name, firebaseKey, text, photoURL}) => {

    // const [contextMenuTarget, setContextMenuTarget] = useState(null);
    // const [contextMenu, setContextMenu] = useState(null);
    // const {currentChatId} = useSelector(state => state.chats);
    //
    // const {deleteData} = useFirebase();
    //
    // const handleContextMenu = (event) => {
    //     event.preventDefault();
    //     setContextMenu(
    //         contextMenu === null ? {
    //             mouseX: event.clientX + 2,
    //             mouseY: event.clientY - 6
    //         } : null)
    //     setContextMenuTarget(event.target);
    // };
    //
    // const handleClose = () => {
    //     setContextMenu(null);
    // };
    //
    // const onCopy = () => {
    //     navigator.clipboard.writeText(contextMenuTarget.textContent);
    //     handleClose();
    // };
    //
    // const onDelete = () => {
    //     const path = `chats/${currentChatId}/${firebaseKey}`;
    //     deleteData(path).then(() => {
    //         handleClose();
    //     });
    // };

    const {currentChatId} = useSelector(state => state.chats);

    const {
        contextMenu,
        onCopy,
        onDelete,
        handleContextMenu,
        handleClose
    } = useContextMenu();

    return (
        <Box>
            <Menu
                open={contextMenu !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu !== null ? {
                            top: contextMenu.mouseY, left: contextMenu.mouseX
                        } : undefined}>
                <MenuItem onClick={(e) => onCopy()}>Copy</MenuItem>
                <MenuItem onClick={() => onDelete(`chats/${currentChatId}/${firebaseKey}`)}>Delete</MenuItem>
            </Menu>
            <Stack direction="row"
                   spacing={1}
                   alignItems="center"
                   padding='15px'>
                <Avatar alt={name} src={photoURL}/>
                <Stack direction="column">
                    <Typography color="secondary"
                                fontSize={18}>
                        {name}
                    </Typography>
                    <Typography onContextMenu={handleContextMenu}
                                onClick={handleContextMenu}
                                sx={{ cursor: 'pointer'}}>
                        {text}
                    </Typography>
                </Stack>
            </Stack>
        </Box>

    )
}

export default Message;