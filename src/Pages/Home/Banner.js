import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen chair-bg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://eduguard-html.netlify.app/dist/images/banner/banner-image-02.png" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='p-2'>
                        <h1 className="text-7xl font-bold">Learn With Expert Anytime Anywhere.</h1>
                        <p className="text-2xl text-gray-500 py-6">Our mision is to help people to find the best course <br />online and learn with expert anytime, anywhere.</p>
                        <button class="btn btn-primary">Getting Started</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;