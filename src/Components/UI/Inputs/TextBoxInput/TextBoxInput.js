import React from 'react';
import classes from './TextBoxInput.module.css';

export default function TextBoxInput(props){
    return <>
        <div className={classes.title}>
            {props.required && <span style={{color:'red'}}> * </span>}
            <span>{props.title}</span>
        </div>
        <div>
            <input {...props} ></input>
        </div>
    </>
}
