import {TextField, Button, Box} from "@mui/material";

import {Formik} from "formik";

import {useSelector} from "react-redux";

import useFirebase from "../hooks/useFirebase";

const SendMessageForm = () => {
    const {currentChatId} = useSelector(state => state.chats);

    const {photoURL, username} = useSelector(state => state.user);

    const {pushData} = useFirebase();

    const writeUserMessage = (text) => {
        const path = `chats/${currentChatId}/`;
        const data = {
            photoURL,
            username,
            text
        }
        return pushData(path, data);
    }

    return (
        <Formik
        initialValues={{
            text: ''
        }}
        onSubmit={({text}, {setSubmitting, resetForm}) => {
            if (text === '' || (/^\s+$/.test(text))) {
                setSubmitting(false);
                resetForm(text);
                return
            }
            writeUserMessage(text).then(() => {
                setSubmitting(false);
                resetForm(text);
            });
        }}>
            {({values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting})=>
                (
                    <Box component="form" onSubmit={handleSubmit}
                    style={{
                        display: 'flex',
                        gap: '15px',
                        padding: '15px'
                    }}>
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained">
                            Send
                        </Button>
                        <TextField
                            placeholder="Your message"
                            fullWidth
                            name="text"
                            type="text"
                            color="secondary"
                            variant="outlined"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={isSubmitting}
                            value={values.text}/>
                    </Box>
                )}
        </Formik>
    )
}

export default SendMessageForm;