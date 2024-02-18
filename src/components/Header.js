import React from "react";
import { Link, useLocation, } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const location = useLocation();

    const textColor = location.pathname === "/" ? 'white' : 'black';

    const logoSrc = location.pathname === "/"
    ? process.env.PUBLIC_URL + "/namelogo_white.svg"
    : process.env.PUBLIC_URL + "/namelogo_black.svg";


    return (
        <>
            <header className={location.pathname === '/' ? 'home-page' : ''}>
                <Link to="/">
                    <img className= "logo" src={logoSrc} alt='Logo' />
                </Link>
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
            </header>
        </>
    );
};


export default Header;