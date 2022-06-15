import React from "react";
// import mail from '../assets/svg/Mail.svg';
// import linkedin from '../assets/svg/LinkedinIcon.svg';

const Info = function () {
    return (
        <div className="info-container">
            <img src='https://agcdn-2mrybbgckm7omi0k.netdna-ssl.com/wp-content/uploads/2016/04/alphagamma-20-largest-communities-for-women-entrepreneurs-startups-entrepreneurship.jpg' />
            <h2>Laura Smith</h2>
            <h4>Frontend Developer</h4>
            <a href='/'>Laura's Website</a>
            <div>

                <button className="btn1">Email</button>

                <button className="btn2">LinkedIn</button>
            </div>
        </div>
    )
}

export default Info;