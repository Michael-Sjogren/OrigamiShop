import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

const LinkButton = ({children, ...otherProps}) => {

    return (
        <Link className="button" {...otherProps}>
            {children}
        </Link>
    )
}

export default LinkButton