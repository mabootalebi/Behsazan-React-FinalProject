import React from 'react';
import classes from './Button.module.css';

export default function Button(props){
    return <div className={classes.container}>
        <button className={([classes.customButton,classes[props.buttonType]]).join(' ')}>{props.title}</button>
    </div>
}