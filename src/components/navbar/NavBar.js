import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.css';
import { useEffect, useState } from "react";

export function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(true);

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
                            <NavLink 
                                to={'/'} 
                                className={({isActive}) => isActive ? 'navbar-link navlink-active' : 'navbar-link'}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'about'} className={({isActive}) => isActive ? 'navbar-link navlink-active' : 'navbar-link'}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'projects'} className={({isActive}) => isActive ? 'navbar-link navlink-active' : 'navbar-link'}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'contact'} className={({isActive}) => isActive ? 'navbar-link navlink-active' : 'navbar-link'}>
                                Contact
                            </NavLink>
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