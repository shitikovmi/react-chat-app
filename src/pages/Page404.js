import {Box, Typography, Button} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {Link} from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";

const Page404 = () => (
    <ErrorBoundary>
        <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            gap: '20px',
            justifyContent: 'center'}}>
            <Typography sx={{
                fontSize: '100px',
                fontStyle: 'italic'
            }}
                        color="secondary">
                404
            </Typography>
            <Link to="/">
                <Button
                    color="secondary"
                    variant="contained">
                    Home
                    <HomeIcon
                        sx={{marginLeft: '10px'}}/>
                </Button>
            </Link>
        </Box>
    </ErrorBoundary>
)

export default Page404;