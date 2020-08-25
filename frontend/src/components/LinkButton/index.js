import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

const LinkButton = ({children, className , ...otherProps}) => {

    return (
        <Link className={"button "+className} {...otherProps}>
            {children}
        </Link>
    )
}

export default LinkButton