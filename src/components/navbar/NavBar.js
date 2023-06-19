import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.css';
import { useEffect, useState } from "react";

export default function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(true);
    const [activeLink, setActiveLink] = useState('home');

	function handleLinkClick(link) {
		setActiveLink(link);
	}

    function handleClick() {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const header = document.querySelector('header');

        function handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            if (scrollTop > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     function handleScroll() {

    //         const home = document.getElementById('home');
    //         const about = document.getElementById('about');
    //         const projects = document.getElementById('projects');
    //         const contact = document.getElementById('contact');

    //         const scrollPosition = window.scrollY;

    //         if ( scrollPosition >= home.offsetTop &&
    //             scrollPosition < about.offsetTop) {
    //             setActiveLink('home');  
    //         } else if (scrollPosition >= about.offsetTop &&
    //             scrollPosition < projects.offsetTop) {
    //             setActiveLink('about');
    //         } else if (scrollPosition >= projects.offsetTop &&
    //             scrollPosition < contact.offsetTop) {
    //             setActiveLink('projects');
    //         } else if (scrollPosition >= contact.offsetTop) {
    //             setActiveLink('contact');
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <span>E</span>
                    <span>D</span>
                    <span>I</span>
                    <span>L</span>
                </div>
                <div className={`navigation ${toggleMenu ? "" : "active"}`}>
                    <ul>
                        <li>
                            <a 
                                href={'#home'} 
                                className={ activeLink === 'home' ? 'navbar-link navlink-active' : 'navbar-link'}
                                onClick={() => handleLinkClick('home')}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href={'#about'} 
                                className={activeLink === 'about' ? 'navbar-link navlink-active' : 'navbar-link'}
                                onClick={() => handleLinkClick('about')}>
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href={'#projects'} 
                                className={activeLink === 'projects' ? 'navbar-link navlink-active' : 'navbar-link'}
                                onClick={() => handleLinkClick('projects')}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href={'#contact'} 
                                className={activeLink === 'contact' ? 'navbar-link navlink-active' : 'navbar-link'}
                                onClick={() => handleLinkClick('contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <button onClick={handleClick}>
                        {
                            toggleMenu ? <FaBars className="menu-btn"/> : <FaTimes className="close-btn" />
                        }
                    </button>
                </div>
            </div>
        </header>
    );
}