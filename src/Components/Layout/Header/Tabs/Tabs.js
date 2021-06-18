import classes from './Tabs.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import TabLink from '../../../UI/Links/TabLink/TabLink';

export default function Tabs(props){
    const userLoggedIn = useSelector(store => store.LoggedIn);

    
    return <div className={classes.container}>
        {userLoggedIn && <TabLink to="/UsersList">UsersList</TabLink>}
    </div>
}