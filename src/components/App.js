import HomePage from "../pages/HomePage";
import ChatPage from "../pages/ChatPage";
import AuthPage from "../pages/AuthPage";
import Page404 from "../pages/Page404";
import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom";
import store from "../store";
import {Provider} from "react-redux";
import {CssBaseline, GlobalStyles, ThemeProvider, createTheme} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyles styles={{'&::-webkit-scrollbar': {
                display: 'none'}}}/>
        <CssBaseline/>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/:id" element={<ChatPage/>}/>
                    <Route path="/signIn" element={<AuthPage/>}/>
                    <Route path="/:id/*" element={<Page404/>}/>
                </Switch>
            </Router>
        </Provider>
    </ThemeProvider>
);

export default App;
