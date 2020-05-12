import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import * as ROUTES from '../../constants/routes';

export const Header = () => {

    const [isActive, setIsActive] = useState(false);

    let icon = isActive ? faTimes:faBars;
    let navClassName = isActive ? 'header_nav_active':'';
    let navLinkClassName = isActive ? 'header_nav_link_active':''

    const handleClick = () => {
        if (!isActive) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    return (
        <div className='layout header'>
            <div className='header_title heading_one'>
                <p>Poker Up</p>
            </div>
            <div className=''>
                <FontAwesomeIcon className='header_menu' icon={icon} onClick={handleClick} size='3x' />
            </div>
            <div className={`header_nav ${navClassName}`}>
                <Link className={`header_nav_link ${navLinkClassName}`} onClick={handleClick} to={ROUTES.LANDING}>Home</Link>
                <Link className={`header_nav_link ${navLinkClassName}`} onClick={handleClick} to={ROUTES.CHART}>Hand Chart</Link>
                <Link className={`header_nav_link ${navLinkClassName}`} onClick={handleClick} to={ROUTES.POTODDS}>Pot Odds Calculator</Link>
                <Link className={`header_nav_link ${navLinkClassName}`} onClick={handleClick} to={ROUTES.RANGES}>Range Calculator</Link>
            </div>
        </div>
    )
};