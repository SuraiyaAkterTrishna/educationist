import React from 'react';

const PolicyCard = ({img, cardTitle, cardDetail}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl`}>
            <figure><img src={img} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDetail}</p>
            </div>
        </div>
    );
};

export default PolicyCard;