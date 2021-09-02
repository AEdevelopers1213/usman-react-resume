import React from 'react';

const ExperienceCard = (props) => {
    return (
        <>
            <div className="experienceCardHeader">
                <strong>{props.workPlace}</strong>
                <span>{props.dateHistory}</span>
            </div>
            <div className="experienceCardContent">
                <p>{props.skillContent}</p>
            </div>
        </>
    )
}

const EducationCard = (props) => {
    return (
        <>
            <div className="educationCardContent">
                <strong>{props.skillName}</strong>
                <span>{props.completeDate}</span>
            </div>
        </>
    )
}
const SkillsCard = (props) => {
    return (
        <>
            <li>
                <p>{props.skillName}</p>
                <span className="percent">{props.progress}%</span>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar"
                         style={{width: props.progress+'%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </li>
        </>
    )
}

export {ExperienceCard, EducationCard, SkillsCard};