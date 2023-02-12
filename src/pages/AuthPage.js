import 'firebaseui/dist/firebaseui.css'
import {useEffect} from "react";
import {Box} from "@mui/material";
import useFirebase from "../hooks/useFirebase";
import ErrorBoundary from "../components/ErrorBoundary";

const AuthPage = () => {

    const {renderAuthUi} = useFirebase();

    useEffect(() => {
        renderAuthUi("#firebaseui-auth-container");
    })

    return (
        <ErrorBoundary>
            <Box sx={{display: 'flex', alignItems: 'center',height: '100vh', justifyContent: 'center'}}>
                <div id="firebaseui-auth-container"></div>
            </Box>
        </ErrorBoundary>
    )
}

export default AuthPage;