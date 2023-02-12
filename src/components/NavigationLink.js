import {ListItem, ListItemButton, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";


const NavigationLink = ({chatName}) => {

    const activeStyle = (isActive) => ({
        color: (isActive) ? '#ce93d8' : 'inherit',
        textDecoration: 'none'
    })

    return (
        <NavLink to={`/${chatName}`}
                 style={({isActive}) => activeStyle(isActive)}>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary={chatName}/>
                </ListItemButton>
            </ListItem>
        </NavLink>
    )
}

export default NavigationLink;