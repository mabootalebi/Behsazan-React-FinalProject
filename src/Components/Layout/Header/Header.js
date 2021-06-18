import React from 'react';
import AccountButtons from './AccountButtons/AccountButtons';
import classes from './Header.module.css';
import Tabs from './Tabs/Tabs';

export default function Header(props){
    return <div className={classes.container}>
        <AccountButtons></AccountButtons>
        <Tabs></Tabs>
    </div>
}