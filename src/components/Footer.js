import React from 'react';
import tweet from '../assets/svg/TwitterIcon.svg';
import facebook from '../assets/svg/FacebookIcon.svg';
import instagram from '../assets/svg/InstagramIcon.svg';
import github from '../assets/svg/GitHubIcon.svg';

const Footer = function () {
    return (
        <div className='footer-container'>
            <div className='icon-container'>
                <img src={tweet} alt='twitter-icon' />
                <img src={facebook} alt='twitter-icon' />
                <img src={instagram} alt='twitter-icon' />
                <img src={github} alt='twitter-icon' />
            </div>
        </div>
    )
}

export default Footer