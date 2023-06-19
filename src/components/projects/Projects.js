import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import './projects.css';

export default function Projects() {
    return (
        <section className="projects" id='projects'>
            <h2>Projects</h2>
            <div className="project-content">
                <div className="project-item" id='portfolio'>
                    <h4>My Personal Portfolio</h4>
                    <p>Technologies</p>
                    <ul>
                        <li><FaJs /></li>
                        <li><FaHtml5 /></li>
                        <li><FaCss3Alt /></li>
                        <li><FaReact /></li>
                        <li><FaGithub /></li>
                    </ul>
                    <button><a href='https://edil.netlify.app/'>Visit site</a></button>
                </div>
                <div className="project-item" id='spotify'>
                    <h4>Spotify App for adding song to playlist</h4>
                    <p>Technologies</p>
                    <ul>
                        <li><FaJs /></li>
                        <li><FaHtml5 /></li>
                        <li><FaCss3Alt /></li>
                        <li><FaReact /></li>
                        <li><FaGithub /></li>
                    </ul>
                    <button>Visit site</button>
                </div>
            </div>
            <hr />
        </section>
    );
}