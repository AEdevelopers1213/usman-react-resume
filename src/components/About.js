import React from 'react';
import aboutImg from "../assets/img/1.jpg";
import Sidebar from "./common/Sidebar";
import AboutCard from "./common/AboutCard";
import {JsonAboutCard} from "./common/JsonData";

import {Menu , Test} from "../components/Menu"
import usmanAboutImg from "../assets/img/usamn-about.jpg"

const About = () => {
    return (
        <>
            <Sidebar
                imgSrc={aboutImg}
                PageName={"About Us"}
            />

            <div className="contentBar">
                <Menu/>
                <Test
                    pageTitle = "WHO I AM"
                    pageName = "ABOUT"
                />
                <div className="aboutContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={usmanAboutImg} alt="About Img"/>
                            </div>
                            <div className="col-md-8">
                                <h3>I'm Usman Talib</h3>
                                <p>A passionate UI/UX Front End & Back End Developer. I have started my career in this field to achieve good knowledge and to serve the other in a better and satisfactory way. I have more than 5 years of experience in programming and web development.

                                    I use HTML5, css3, jQuery, javascript, bootstrap, and much more js library as needed in the project. I create 100% responsive and 100% pixel perfect with the design. I use PHP as backend programming, Ajax for server-side requests.

                                    I have a lot of experience in WordPress and created many WordPress themes. I create mobile apps in Cordova and build it for Android, IOS and windows phone.</p>
                            </div>
                            {
                                JsonAboutCard.map((val, ind) =>{
                                    return <AboutCard
                                        key={ind}
                                        cardTitle={val.cardTitle}
                                        cardContent={val.cardContent}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;