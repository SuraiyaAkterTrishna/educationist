import React from 'react';
import book from '../../assets/feature/book.png';
import programmer from '../../assets/feature/programmer.png';
import clock from '../../assets/feature/clock.png';
import Feature from './Feature';

const Features = () => {
    const features = [
        {
            _id: 1,
            name: '250K Online Course',
            description: 'We offer unlimited course options to our students from which they can select the best for them.',
            img: book
        },
        {
            _id: 2,
            name: 'Expert Instructors',
            description: 'You will learn from our experts who have many years of experience in their respective fields.',
            img: programmer
        },
        {
            _id: 3,
            name: 'Lifetime Access',
            description: 'Once you complete your course, you will earn a certificate or degree fr]or the same from our institute.',
            img: clock
        }
    ]
    return (
        <div>
            <div className='mb-20 text-center'>
                <h1 className='text-5xl font-bold tracking-widest text-primary text-center m-5 uppercase'>Our Top Features</h1>
                <p className='py-4 text-gray-400'>We provide a wide range of courses for the different sectors you can choose from, which suits you perfectly</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-6 mb-20'>
                {
                    features.map(feature => <Feature
                        key={feature._id}
                        feature={feature}
                    ></Feature>)
                }
            </div>
        </div>
    );
};

export default Features;