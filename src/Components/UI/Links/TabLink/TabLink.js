import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './TabLink.module.css';

export default function TabLink(props){
    return <NavLink exact {...props} activeClassName={classes.activeClass} className={classes.container}>
        {props.children}
    </NavLink>
}