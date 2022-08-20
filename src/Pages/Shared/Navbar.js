import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
import Login from '../Login/Login';

const Navbar = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        {/* <li><Link to="/review">Review</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact US</Link></li>       */}
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class=" normal-case text-xl">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-end">
                <Link class="btn btn-primary" to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;