import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const[services, setServices] = useState([]);
    useEffect( () => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1 className='text-5xl font-bold tracking-widest text-primary text-center m-5 uppercase'>Find Course With Top Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
                {
                    services.map(service => <Service
                        key = {service._id}
                        service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;