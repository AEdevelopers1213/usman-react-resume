import React from 'react';
import LightGallery from "lightgallery/react";
import {NavLink} from "react-router-dom";
import img from "../../assets/img/usamn-about.jpg";
import upword from "../../assets/img/freelancing/upwork.png";

const Portfoliogallery = (props) => {
    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <div className="imgDiv">
                        <LightGallery>
                            <NavLink to={require(`./../../assets/img/portfolio/${props.mainImgAddress}`).default} >
                                <img src={require(`./../../assets/img/thumbnail/${props.thumbImgAddress}`).default} alt=""/>
                            </NavLink>
                        </LightGallery>
                    </div>
                    <div className="content">
                        <a href={props.projectLink} target="_blank">
                            <strong>{props.projectName}</strong>
                        </a>
                        <p>{props.languageName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const PortfolioReview = (props) =>{
    return(
        <>
            <div className="item">
                <div className="card">
                    <div className="clientreview">
                        <p>{props.reviewText}</p>
                    </div>
                    <div className="clientName">
                        <img src={require(`./../../assets/img/freelancing/${props.freelancingPhoto}`).default} alt=""/>
                        <div className="content">
                            <strong>{props.clientName}</strong>
                            <span>{props.freelancingPlace}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Portfoliogallery, PortfolioReview};