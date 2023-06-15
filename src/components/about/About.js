import React from "react";
import image from '../../images/51.jpg'

export default function About() {

    return (
        <div className="about">
            <h1 className="about-title">About me</h1>
            <div className="about-container">
                <div className="about-image">
                    <img src={image} alt="Profile" />
                </div>
                <div className="about-text">
                    <p>Hello! My name is Edil Kamchybekov, 
                        and I'm 25 years old. I come from Kyrgyzstan 
                        and recently started learning Front-End Development. 
                        My goal is to become an experienced Web Developer.</p>
                    <p>I am taking a Front-End Development course on Codecademy 
                        to further my knowledge. I have already gained experience 
                        in HTML, CSS, and JavaScript, and my next step is to learn 
                        JavaScript frameworks like React and Redux to enhance my 
                        skills.</p>
                    <p>In the future, I plan to delve into Back-End Development 
                        using Java programming language. With hard work and dedication, 
                        I aim to become a well-rounded Web Developer capable of creating 
                        outstanding digital experiences.</p>
                </div>
            </div>
        </div>
    );
}