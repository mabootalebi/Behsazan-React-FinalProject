import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useReduxDispatch from '../../Hooks/useReduxDispatch';
import Loading from '../UI/Loading/Loading';
import CustomToast from '../UI/Toast/Toast';
import Header from './Header/Header';
import classes from './Layout.module.css';

function Layout(props){

    const dispatch = useReduxDispatch();
    const userLoggedIn = useSelector(store => store.LoggedIn);

    useEffect(()=> {
        const token = window.localStorage.getItem('token');
        if (token && !userLoggedIn){
            dispatch.Login(token)
        }
    },[dispatch, userLoggedIn]);

    return <div className={classes.container}>    
                <Header/>
                <CustomToast/>
                <Loading/>
                <div className={classes.body}>
                    {props.children}
                </div>
           </div>
}

export default memo(Layout);