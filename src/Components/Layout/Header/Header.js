import React from 'react';
import AccountButtons from './AccountButtons/AccountButtons';
import classes from './Header.module.css';

export default function Header(props){
    return <div className={classes.container}>
        <AccountButtons></AccountButtons>
    </div>
}