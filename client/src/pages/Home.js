import React from 'react';
import './custom.css';

import {FaArrowRight } from "react-icons/fa";
import Profile from '../components/Profile';


const Home = () => {
    return (
        <>
            <div className='main'>
                <Profile/>
                <div className='about-container'>
                    <div className='about-wrapper'>
                        <div className='about-heading'>
                            <h2>About</h2>
                        </div>
                        <div className='about-content'>
                            <p>Airbnb was born in 2007 when two Hosts welcomed three guests to their San Francisco home, and has since grown to over 5 million Hosts who have welcomed over 1.5 billion guest arrivals in almost every country across the globe. Every day, Hosts offer unique stays and experiences that make it possi <span>... see more</span></p>
                        </div>
                        <div className='about-grid'>
                            <div className='grid-item'>
                                <div className='grid-infor'>
                                    <span>Contact info</span>
                                    <a href=''>airbnb.com</a>
                                </div>
                            </div>
                            <div className='grid-item'>
                                <div className='grid-infor'>
                                    <span>Funding via Crunchbase</span>
                                    <a href='' className=''>Secondary market</a>
                                    <div className='investor text-grey'>3 total investor</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='show-more'>
                        <a href=''>Show all details <FaArrowRight/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home