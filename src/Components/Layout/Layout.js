import React from 'react';
import Loading from '../UI/Loading/Loading';
import CustomToast from '../UI/Toast/Toast';
import Header from './Header/Header';
import classes from './Layout.module.css';

export default function Layout(props){    
    return <div className={classes.container}>    
                <Header/>
                <CustomToast/>
                <Loading/>
                <div className={classes.body}>
                    {props.children}
                </div>
           </div>
}