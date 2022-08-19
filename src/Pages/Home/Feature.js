import React from 'react';

const Feature = ({ feature }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={feature.img} alt="" className="rounded-xl w-16" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{feature.name}</h2>
                <p>{feature.description}</p>
            </div>
        </div>
    );
};

export default Feature;