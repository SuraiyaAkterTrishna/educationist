import React from 'react';

const Service = ({ service }) => {
    const { name, img, ratings, instructorImg, instructorName, oldPrice, newPrice } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <div className='grid grid-cols-3 gap-4'>
                    <div className='flex justify-center items-center gap-1'>
                        <img src="https://eduguard-html.netlify.app/dist/images/icon/star.png" alt="" />
                        <span className='text-gray-500'>{ratings}</span>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src="https://eduguard-html.netlify.app/dist/images/icon/book.png" alt="" />
                        <span className='text-gray-500'>37 lessons</span>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src="https://eduguard-html.netlify.app/dist/images/icon/Clock.png" alt="" />
                        <span className='text-gray-500'>3 hours</span>
                    </div>
                </div>
                <div class="divider my-0"></div>
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <div className='flex justify-center gap-20'>
                    <div className='flex justify-center items-center gap-1'>
                        <div class="avatar">
                            <div class="w-8 mr-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={instructorImg} alt='' />
                            </div>
                        </div>
                        <span className='text-gray-500'>{instructorName}</span>
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='flex justify-center items-center gap-1'>
                            <p className='text-gray-400'><strike>${oldPrice}</strike></p>
                            <p className='text-orange-500 font-bold'>${newPrice}</p>
                        </div>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary btn-wide mt-5">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;