import React from "react";
import image from '../../images/51.jpg'
import './about.css';
import { FaJs, FaReact, FaJava, FaCss3Alt, FaHtml5, FaGitAlt, FaGithub } from "react-icons/fa";
import {GrMysql} from 'react-icons/gr';
import { SiRedux } from 'react-icons/si';
import { Link } from "react-router-dom";

export default function About() {

    const skills = [
        {
            name: "JavaScript",
            icon: FaJs
        },
        {
            name: "HTML",
            icon: FaHtml5
        },
        {
            name: "CSS",
            icon: FaCss3Alt
        },
        {
            name: "React",
            icon: FaReact
        },
        {
            name: "Redux",
            icon: SiRedux
        },
        {
            name: "Java",
            icon: FaJava
        },
        {
            name: "Git",
            icon: FaGitAlt
        },
        {
            name: "GitHub",
            icon: FaGithub
        },
        {
            name: "MySQL",
            icon: GrMysql
        }
    ]
    return (
        <section className="about">
            <h2>About me</h2>
            <div className="about-content">
                <div className="about-image">
                    <img src={image} alt="Edil Kamchybekov"/>
                </div>
                <div className="about-text">
                    <p>Hello! My name is Edil Kamchybekov. I'm 25 years old and I come from 
                    the wonderful country of <a href="https://en.wikipedia.org/wiki/Kyrgyzstan">Kyrgyzstan</a>. Currently, I am studying Front-End 
                    development at <a href="https://www.codecademy.com/">Codecademy</a>. My current knowledge includes JavaScript, HTML,
                    CSS, Java, Git, GitHub, React, Redux, MySQL, and more.</p>
                    <p> In the future, I plan to expand my skills and learn backend development using Java. I have 
                    a strong passion for web development and enjoy creating engaging and 
                    user-friendly interfaces. I'm always excited to learn new technologies 
                    and stay updated with the latest trends in the industry.</p>
                    <p>
                    Feel free to explore my portfolio and projects to get a better idea 
                    of my work. If you have any questions or would like to collaborate, 
                    don't hesitate to <Link to="/contact">reach out</Link>. I look forward to connecting with you! 
                    Thank you for visiting my page!</p>
                </div>
            </div>
            <div className="skills">
                <h3>Technologies</h3>
                <ul>
                {
                    skills.map((skill, index) => {
                        return (
                            <li key={index}>
                                <skill.icon className="icon"/>
                                <span>{skill.name}</span>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        </section>
    );
}