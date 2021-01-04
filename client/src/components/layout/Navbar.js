import React from 'react'
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}


Navbar.propTypes = {
    title: PropType.string.isRequired,
    icon: PropType.string
}

Navbar.defaultProps = {
    title: 'contact keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar;