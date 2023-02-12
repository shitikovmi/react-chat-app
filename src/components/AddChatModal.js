import {Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Alert, Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {chatModalClose} from "../store/slices/addChatModalSlice";
import {Formik} from "formik";
import {useState} from "react";
import useFirebase from "../hooks/useFirebase";

const AddChatModal = () => {

    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const {open} = useSelector(state => state.chatModal);
    const {setDataWithoutReplacement} = useFirebase();

    const createChat = chatName => {
        const path = `navigation/${chatName}`;
        const dataObject = {
            chatName
        }
        const errorHandler = () => {
            setError(true);
        }
        return setDataWithoutReplacement(path, dataObject, errorHandler);
    }

    const errorElement = error ? <Alert sx={{marginBottom: '15px', textAlign: 'center'}} severity="info">This chat already exists</Alert> : null;

    return (
        <Formik
        initialValues={{chatName: ''}}
        onSubmit={({chatName}, {setSubmitting, resetForm}) => {
            if (chatName === '' || (/^\s+$/.test(chatName))) {
                setSubmitting(false);
                resetForm(chatName);
                return
            }

            createChat(chatName).then(() => {
                setSubmitting(false);
                resetForm(chatName);
            });
        }}>
            {({values,
                  handleChange,
                  handleBlur,
                  handleSubmit})=> (
                    <Dialog open={open} onClose={() => {
                        setError(false)
                        dispatch(chatModalClose())
                    }}>
                        <Box component="form" onSubmit={handleSubmit}>
                            <DialogContent>
                                <DialogTitle sx={{textAlign: 'center'}}>
                                    Enter the name of the chat below
                                </DialogTitle>
                                {errorElement}
                                <TextField
                                    margin="dense"
                                    label="Name"
                                    type="text"
                                    name="chatName"
                                    fullWidth
                                    variant="outlined"
                                    color="secondary"
                                    onChange={(data) => {
                                        handleChange(data);
                                        setError(false);
                                    }}
                                    onBlur={handleBlur}
                                    value={values.name}/>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    color="secondary"
                                    onClick={() => dispatch(chatModalClose())}>Cancel</Button>
                                <Button
                                    type="submit"
                                    color="secondary">
                                    Ok
                                </Button>
                            </DialogActions>
                        </Box>
                    </Dialog>
                )}
        </Formik>
    );
}

export default AddChatModal;