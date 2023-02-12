import {List, Divider, Box} from "@mui/material";
import NavigationLink from "./NavigationLink";
import ChatSearch from "./ChatSearch";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Error from "./Error";
import useFirebase from "../hooks/useFirebase";

const NavigationContent = () => {

    const [filteredNavigationLinksArray, setFilteredNavigationLinksArray] = useState([]);

    const {filter} = useSelector(state => state.filter)

    const {
        observeDataChanging,
        data,
        error
    } = useFirebase();

    useEffect(() => {
        const dataConverter = data => (
            Object.entries(data.val()).map(([chatName]) => ({chatName}))
        );
        const path = 'navigation';
        observeDataChanging(path, dataConverter);
    }, [])

    useEffect(() => {
        const filteredNavigationLinksArray = data.filter(link => {
            if (link.chatName.includes(filter) || !filter) return link
        })

        setFilteredNavigationLinksArray(filteredNavigationLinksArray);
    }, [data, filter])

    const contentElements = !error ? <List>
        {
            filteredNavigationLinksArray.map(({chatName}) => (
                <NavigationLink key={chatName} chatName={chatName}/>
            ))
        }
    </List> : null;

    const errorElement = error ? <Error/> : null;

    return (
        <Box>
            <ChatSearch/>
            <Divider />
            {contentElements}
            {errorElement}
        </Box>
    )
}

export default NavigationContent;
