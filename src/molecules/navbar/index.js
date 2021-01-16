import React, { useState } from 'react';
import'./styles.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="nav-bar">
                <div className="nav-bar-container">
                    <Link to="/"
                          className="nav-bar-logo"
                          onClick={closeMobileMenu}
                    >
                        Just CV
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/projects"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contacts"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
