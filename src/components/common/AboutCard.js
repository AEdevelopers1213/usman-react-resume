import React from 'react';

const AboutCard = (props) => {
    return (
        <>
            <div className="col-md-6">
                <div className="aboutCard">
                    <h3>{props.cardTitle}</h3>
                    <p>{props.cardContent}</p>
                </div>
            </div>
        </>
    )
}

export default AboutCard;