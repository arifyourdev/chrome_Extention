import React from 'react'
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt,FaArrowRight } from "react-icons/fa";
const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='banner'>
                <img src='assets/airbnb_cover.jpg' />
            </div>
            <div className='profile-wrapper'>
                <div className='profile-wrap'>
                    <div className='profile-logo'>
                        <img src='assets/airbnb_logo.jpg' />
                    </div>
                    <div className='profile-content'>
                        <div>
                            <h2>Airbnb</h2>
                            <p>Airbnb is a community based on connection and belonging.</p>
                            <span>Software Development San Francisco, CA 3M followers 5K-10K employees</span>
                        </div>
                        <div className='profile-links'>
                            <Link className='follow'>+ Follow</Link>
                            <Link className='visit-link'> Visit Website <FaExternalLinkAlt /></Link>
                            <Link>More</Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='navbar-wrapper'>
                    <ul>
                        <li><Link to="/" className='nav-links active'>Home</Link></li>
                        <li><Link to="/about" className='nav-links'>About</Link></li>
                        <li><Link to="/product" className='nav-links'>Product</Link></li>
                        <li><Link to="/posts" className='nav-links'>Posts</Link></li>
                        <li><Link to="/" className='nav-links'>Jobs</Link></li>
                        <li><Link to="/" className='nav-links'>Life</Link></li>
                        <li><Link to="/" className='nav-links'>People</Link></li>
                        <li><Link to="/" className='nav-links'>Insights</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Profile