import React from 'react';
import Logo from '../images/devjane.png';

const Navbar = () => {
    return (
        <>
         <header>
        <div className="logo">
            <img src={Logo} alt=""/>
        </div>
        <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
                <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
            </ul>
        </nav>
    </header>
            
        </>
    );
}

export default Navbar;
