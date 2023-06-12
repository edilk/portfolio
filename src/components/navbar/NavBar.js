import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import '../../styles/main.css';
import { NavLink } from 'react-router-dom';

export function NavBar() {

    const navRef = useRef();

    function showNavBar() {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <div className="nav-bar">
                <span><NavLink to={'/'} id="logo">Edil Kamchybekov</NavLink></span>
                <nav ref={navRef}>
                    <NavLink to={'/'} className={({isActive}) => isActive ? 'active-link' : 'not'}>Home</NavLink>
                    <NavLink to={'about'} className={({isActive}) => isActive ? 'active-link' : 'not'}>About</NavLink>
                    <NavLink to={'projects'} className={({isActive}) => isActive ? 'active-link' : 'not'}>Projects</NavLink>
                    <NavLink to={'skills'} className={({isActive}) => isActive ? 'active-link' : 'not'}>Skills</NavLink>
                    <NavLink to={'contact'} className={({isActive}) => isActive ? 'active-link' : 'not'}>Contact</NavLink>
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