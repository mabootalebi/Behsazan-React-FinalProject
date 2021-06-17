import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Loading.module.css';

export default function Loading(){

    const loading = useSelector(store => store.DisplayLoading);

    if (!loading)
        return null;

    return <div className={classes.container}>
        <div className={classes.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
}