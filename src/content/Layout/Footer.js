import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className='layout footer'>
            <p className=''>All rights reserved Gavin Callander 2020</p>
            <FontAwesomeIcon className='' icon={faGithub} size='2x' />
            <FontAwesomeIcon className='' icon={faLinkedin} size='2x' />
        </div>
    )
};