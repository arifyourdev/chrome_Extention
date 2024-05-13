import React from 'react'
import Profile from '../components/Profile';
import { FaArrowRight } from "react-icons/fa";

const About = () => {
    return (
        <div className='main'>
            <Profile />
            <div className='about-container'>
                <div className='about-wrapper'>
                    <div className='about-heading'>
                        <h2>Overview</h2>
                    </div>
                    <div className='about-content'>
                        <p>Airbnb was born in 2007 when two Hosts welcomed three guests to their San Francisco home, and has since grown to over 5 million Hosts who have welcomed over 1.5 billion guest arrivals in almost every country across the globe. Every day, Hosts offer unique stays and experiences that make it possible for guests to connect with communities in a more authentic way.</p>
                    </div>
                     <div className='about-content'>
                         <div className='about-item'>
                              <h5>Website</h5>
                              <h6><a href='http://airbnb.com'>http://airbnb.com</a></h6>
                         </div>
                         <div className='about-item'>
                              <h5>Industry</h5>
                              <h6>Software Development</h6>
                         </div>
                         <div className='about-item'>
                              <h5>Company size</h5>
                              <h6>5,001-10,000 employees</h6>
                              <h6>35,231 associated members </h6>
                         </div>
                         <div className='about-item'>
                              <h5>Headquarters</h5>
                              <h6>San Francisco, CA</h6>
                         </div>
                         <div className='about-item'>
                              <h5>Founded</h5>
                              <h6>2007</h6>
                         </div>
                         <div className='about-item'>
                              <h5>Specialties</h5>
                              <h6>travel accommodations, collaborative economy, and hospitality</h6>
                         </div>
                     </div>
                </div>
                 
            </div>
        </div>
    )
}

export default About