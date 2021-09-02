import React from 'react';

const SideBar = (props) => {
    return (
        <>
            <div className="sideBar">
                <img src={props.imgSrc} alt="img"/>
                <h1>{props.PageName}</h1>
            </div>
        </>
    )
}

export default SideBar;