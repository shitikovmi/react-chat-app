import {Component} from "react";
import {Box} from "@mui/material";
import Error from "./Error";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.error) {
            return (
                <Box sx={{
                    height: '100vh',
                    width: '100vw',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Error/>
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;