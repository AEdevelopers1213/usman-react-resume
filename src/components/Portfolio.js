import React from 'react';
import contactImg from "../assets/img/3.jpg";
import Sidebar from "./common/Sidebar";
import {Menu, Test} from "./Menu";
import {Portfoliogallery, PortfolioReview} from "../components/common/PortfolioCard";
import {PortfolioGallery, PortfolioReviewJson} from "./common/JsonData";
import OwlCarousel from 'react-owl-carousel';
import upword from "../assets/img/freelancing/upwork.png"

const Portfolio = () => {
    return (
        <>
            <Sidebar
                imgSrc={contactImg}
                PageName={"PORTFOLIO"}
            />
            <div className="contentBar">
                <Menu/>
                <Test
                    pageTitle="LATEST WORK"
                    pageName="MY PROJECTS"
                />
                <div className="portfolio">
                    <div className="container">
                        <div className="row">
                            {
                                PortfolioGallery.map((val, ind) => {
                                    return <Portfoliogallery
                                        key={ind}
                                        mainImgAddress={val.mainImgAddress}
                                        thumbImgAddress={val.thumbImgAddress}
                                        projectLink={val.projectLink}
                                        projectName={val.projectName}
                                        languageName={val.languageName}
                                    />
                                })
                            }
                        </div>
                        <div className="reviews">
                            <h3>WHAT PEOPLE SAY?</h3>
                            <OwlCarousel className='owl-theme' loop margin={10} nav={true} dots={true} items={2}
                                         center={false} autoHeightClass={true}>
                                {
                                    PortfolioReviewJson.map((val, ind)=>{
                                        return <PortfolioReview
                                            key={ind}
                                            reviewText={val.reviewText}
                                            freelancingPhoto={val.freelancingPhoto}
                                            clientName={val.clientName}
                                            freelancingPlace={val.freelancingPlace}
                                        />
                                    })
                                }
                            </OwlCarousel>;

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;