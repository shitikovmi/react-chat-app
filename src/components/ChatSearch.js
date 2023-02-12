import {Box, TextField} from "@mui/material";
import {setFilter} from "../store/slices/filterSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";

const ChatSearch = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', padding: '12px'}}>
            <TextField
                size="small"
                label="Chat name"
                variant="outlined"
                name="filter"
                color="secondary"
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                    dispatch(setFilter(e.target.value));
                }}/>
        </Box>
    )
}

export default ChatSearch;