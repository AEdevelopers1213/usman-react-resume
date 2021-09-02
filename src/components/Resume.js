import React from 'react';
import resumeImg from "../assets/img/2.jpg";
import Sidebar from "./common/Sidebar";
import {Menu, Test} from "./Menu";
import {ExperienceCard, EducationCard, SkillsCard} from "../components/common/ResumeCard"
import {ResumeExperience, ResumeEducation, ResumeSkills} from "./common/JsonData";

const Resume = () => {
    return (
        <>
            <Sidebar
                imgSrc={resumeImg}
                PageName={"Resume"}
            />
            <div className="contentBar">
                <Menu/>
                <Test
                    pageTitle="History"
                    pageName="MY RESUME"
                />
                <div className="resumeContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="experienceCard">
                                    <h3>Experience</h3>
                                    {
                                        ResumeExperience.data.map((val, ind) => {
                                            return <ExperienceCard
                                                key={ind}
                                                workPlace={val.workPlace}
                                                dateHistory={val.dateHistory}
                                                skillContent={val.skillContent}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="educationCard">
                                    <h3>Education</h3>

                                    {
                                        ResumeEducation.map((val, ind) => {
                                            return <EducationCard
                                                key={ind}
                                                skillName={val.skillName}
                                                completeDate={val.completeDate}
                                            />
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                        <div className="skillsCard">
                            <h3>MY SKILLS</h3>
                            <ul className="skills">
                                {
                                    ResumeSkills.map((val, ind)=>{
                                        return <SkillsCard
                                            key={ind}
                                            skillName={val.skillName}
                                            progress={val.progress}
                                        />
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;