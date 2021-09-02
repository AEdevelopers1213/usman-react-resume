import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <>
            <div id="header">
                <div className="container-fluid">
                    <div className="col-md-12 text-center align-self-center" id="main-menu">
                        <nav id="navbar">
                            <ul className="nav-list">
                                <li className="active dropdowns">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="dropdowns">
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li className="dropdowns">
                                    <NavLink to="/resume">Resume</NavLink>
                                </li>
                                <li className="dropdowns">
                                    <NavLink to="/portfolio">Portfolio</NavLink>
                                </li>
                                <li className="dropdowns">
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

const Test = (props) => {
    return (
        <>
            <div className="pageName">
                <p>{props.pageTitle}</p>
                <h2>{props.pageName}</h2>
            </div>
        </>
    )
}

export {Menu, Test};