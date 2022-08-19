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
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12'>
                {
                    features.map(feature => <Feature
                        key = {feature._id}
                        feature = {feature}
                    ></Feature>)
                }
            </div>
        </div>
    );
};

export default Features;