import {Box, Alert} from "@mui/material";

const Error = () => (
    <Box sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'}}>
        <Alert severity="error">Unexpected error</Alert>
    </Box>
)

export default Error;