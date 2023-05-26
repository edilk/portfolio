import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import '../styles/main.css'

export function NavBar() {

    const navRef = useRef();

    function showNavBar() {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <div className="nav-bar">
                <h1><a href="/#" id="logo">EK</a></h1>
                <nav ref={navRef}>
                    <a href="/#">About me</a>
                    <a href="/#">Projects</a>
                    <a href="/#">Skills</a>
                    <a href="/#">Contact</a>
                    <button onClick={showNavBar} className="nav-btn nav-btn-close">
                        <FaTimes/>
                    </button>
                </nav>
                <button onClick={showNavBar} className="nav-btn nav-btn-menu">
                    <FaBars/>
                </button>
            </div>
        </header>
        );
}