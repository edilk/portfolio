import { Button } from "@mui/material";
import { buttonStyle } from "./button.style";

export default function Home() {
    return (
        <div className="home">
            <div className="home-text">
                <h3 className="greeting">Hello, I am Edil</h3>
                <h2 className="frontend-text">{'< '}<strong>Front-end Developer</strong> { '/>'}</h2>
                <p className="p-text">and I'm delighted to welcome you to my portfolio. As a starting front-end developer this space showcases my journey, skills, and projects. Feel free to explore and get to know more about me and my work.</p>
            </div>
            <div className="home-button">
                <Button variant="contained" sx={buttonStyle}>Resume</Button>
            </div>
        </div>
    );
}