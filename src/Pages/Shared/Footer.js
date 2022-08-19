import React from 'react';

const Footer = () => {
    return (
        <footer className=' bg-base-200 text-base-content'>
            <div class="footer p-8">
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About Us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Help and Support</a>
                    <a class="link link-hover">FAQs</a>
                </div>
                <div>
                    <span class="footer-title">Supports</span>
                    <a class="link link-hover">Courses</a>
                    <a class="link link-hover">Career</a>
                    <a class="link link-hover">Affiliate</a>
                    <a class="link link-hover">Events</a>
                </div>
                <div>
                    <span class="footer-title">Quick Links</span>
                    <a class="link link-hover">Partnership</a>
                    <a class="link link-hover">Become a Instructor</a>
                    <a class="link link-hover">Get the App</a>
                    <a class="link link-hover">Privacy policy</a>
                </div>
                <div>
                    <span class="footer-title">Newsletter</span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text">Enter your email address</span>
                        </label>
                        <div class="relative">
                            <input type="text" placeholder="username@gmail.com" class="input input-bordered w-full pr-16" />
                            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-4 text-center text-gray-500'>
                <p>Copyright © 2022 - All right reserved by Educationist</p>
            </div>
        </footer>
    );
};

export default Footer;