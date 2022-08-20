import React from 'react';
import Review from './Review';
import first from '../../assets/reviews/first.webp';
import second from '../../assets/reviews/second.webp';
import third from '../../assets/reviews/third.png';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            subject: 'UI/UX design student',
            reviews: 'Educationist is such an amazing learning platform that offers complete package of Web Development. The uniqueness of educationist is, It’s Impactful syllabus by which you will get maximum sufficient output with minimum sufficient knowledge.',
            img: first
        },
        {
            _id: 2,
            name: 'Moriom Rabeya',
            subject: 'Web Development Student',
            reviews: 'This is course is completely different.This course makes me a stronger, hard worker, and dedicated. and I am so proud to be a part of this course. I think I have made the best decision of my life by taking this course.',
            img: second
        },
        {
            _id: 3,
            name: 'Asia Fatema',
            subject: 'Graphics Design Student',
            reviews: 'Very effective and caring course. Thank you so much everyone related to this journey who have worked hard and made us hard working. Special thanks for giving access to contents after finishing.',
            img: third
        },
    ]
    return (
        <section className='my-20 px-8'>
            <div className='text-center'>
                <h2 className='max-w-7xl text-5xl font-bold tracking-widest text-primary text-center m-5'>What Our Students Says About Our Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;