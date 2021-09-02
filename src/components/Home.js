import React from 'react';
import Sidebar from "../components/common/Sidebar"
import usman from "../assets/img/usman.png"
// import Menu from "../components/Menu"
import {Menu} from "../components/Menu"

import {NavLink} from "react-router-dom";
import ReactTypingEffect from 'react-typing-effect';

//import icon from material icons
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Home = () => {
    return (
        <>
            <Sidebar
                imgSrc={usman}
                PageName={""}
            />
            <div className="contentBar">
                <Menu/>
                <div className="container">
                    <div className="info">
                        <p>HELLO, THERE</p>
                        <h1>I'M USMAN TALIB</h1>
                        <span>
                            <ReactTypingEffect
                                text={["WEB DEVELOPER", "WEB PROGRAMMER", "WEB DESIGNER", "CORDOVA APPS DEVELOPMENT",
                                    "VUE JS", "WORDPRESS DEVELOPMENT", "IMAGE OPTIMIZATION", "PSD TO HTML A + WORK",
                                    "DATA SCRAPPING"]}
                                speed="50" eraseSpeed="100" eraseDelay="500" typingDelay="500"/>
                        </span>
                        <NavLink className="btn-style" to="#">DOWNLOAD CV</NavLink>
                    </div>
                    <div className="homeIcon">
                        <ul>
                            <li>
                                <a href="#">
                                    <FacebookIcon/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <LinkedInIcon/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;