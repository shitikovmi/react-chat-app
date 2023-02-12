import {useState, useCallback} from "react";
import useFirebase from "./useFirebase";

const useContextMenu = () => {

    const {deleteData} = useFirebase();

    const [contextMenuTarget, setContextMenuTarget] = useState(null);
    const [contextMenu, setContextMenu] = useState(null);

    const handleContextMenu = useCallback((event) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null ? {
                mouseX: event.clientX + 2,
                mouseY: event.clientY - 6
            } : null)
        setContextMenuTarget(event.target);
    }, [contextMenu]);

    const handleClose = useCallback(() => {
        setContextMenu(null);
    }, []);

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(contextMenuTarget.textContent)
            .then(() => {
                handleClose();
        });
    }, [handleClose, contextMenuTarget]);

    const onDelete = useCallback((path) => {
        deleteData(path).then(() => {
            handleClose();
        });
    }, [handleClose, deleteData]);

    return {
        contextMenu,
        onCopy,
        onDelete,
        handleContextMenu,
        handleClose
    }
}

export default useContextMenu;