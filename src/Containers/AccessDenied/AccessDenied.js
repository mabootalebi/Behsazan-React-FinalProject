import classes from './AccessDenied.module.css';
import React from 'react';

export default function AccessDenied(){
    return <div className={classes.container}>
        <div className={classes.code}>403</div>
        <br/>
        <div className={classes.context}>Access Denied/Forbidden</div>
    </div>
}