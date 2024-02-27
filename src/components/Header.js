import React from "react";
import { Link, useLocation} from "react-router-dom";
import "./Header.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Header = () => {
    const location = useLocation();

    const textColor = location.pathname === "/" ? 'white' : 'black';

    const headerStyle = {
        backdropFilter: location.pathname === "/" ? 'none' : 'blur(50px)'
    };

    const logoSrc = location.pathname === "/"
    ? process.env.PUBLIC_URL + "/namelogo_white.svg"
    : process.env.PUBLIC_URL + "/namelogo_black.svg";

    // MATERIAL UI
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = () => (
        <Box sx={{ width:250, position: 'relative', top: '50%', transform: 'translateY(-50%)'}} role="presentation" onclick={toggleDrawer(false)}>
            <List sx={{flexDirection: 'column', alignItems: 'center' }}>
                {['About', 'Timeline', 'Projects', 'Contact'].map((text, index) => (
                    <ListItemButton component={Link} to={`/${text.toLowerCase()}`} onClick={toggleDrawer(false)} sx={{ fontWeight: 'bold', color: 'white' }}>
                            <ListItemIcon sx={{color: "white"}}>
                                {index === 0 ? <InfoOutlinedIcon /> : 
                                 index === 1 ? <TimelineOutlinedIcon />:
                                 index === 2 ? <SmartphoneOutlinedIcon />:
                                 <EmailOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <header className={location.pathname === '/' ? 'home-page' : ''} style={headerStyle}>
                <Link to="/">
                    <img className= "logo" src={logoSrc} alt='Logo' />
                </Link>
                <div>
                    <div className="mobile-menu">
                        <IconButton onClick={toggleDrawer(true)} aria-label="open drawer" sx={{color: textColor}} >
                        <MenuOutlinedIcon className="DrawerIcon"/>
                        </IconButton>
                        <Drawer
                            anchor='right'
                            open={open}
                            onClose={toggleDrawer(false)}
                            sx={{ '& .MuiDrawer-paper': { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}>
                            <DrawerList/>
                        </Drawer>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/about" style={{color: textColor}}>About</Link>
                            </li>
                            <li>
                                <Link to="/timeline"style={{color: textColor}}>Timeline</Link>
                            </li>
                            <li>
                                <Link to="/projects"style={{color: textColor}}>Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact"style={{color: textColor}}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};


export default Header;