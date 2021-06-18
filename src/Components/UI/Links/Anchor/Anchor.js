import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Anchor.module.css';

export default function Anchor(props){
    return <Link exact {...props} className={classes.container}>
        {props.children}
    </Link>
}