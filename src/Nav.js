import React from 'react';
import './App.css';
import { Link } from "react-router-dom";


//Navigation bar where links are displayed
function Nav(){
    return(
        <nav className="nav">
            <ul className="nav-links">

                <Link to={'/home'}>
                    <li><b>Home</b></li>
                </Link>

                <Link>
                <li><img className="waveIcon" src={"waving.gif"} /></li>
                </Link>

                <Link to={'/start'}>
                    <li><b>Start</b></li>
                </Link>

            </ul>
        </nav>
    );
}


export default Nav;