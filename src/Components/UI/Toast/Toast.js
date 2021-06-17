import React from 'react';
import {Toast} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useReduxDispatch from '../../../Hooks/useReduxDispatch';
import classes from './Toast.module.css';

export default function CustomToast(){

    const {title, context,type,display} = useSelector(store => store.Toast);
    const dispatch = useReduxDispatch();

    if (!display)
        return null;

    return <div className={classes.container}>
            <Toast onClose={dispatch.HideToast} show={display} delay={5000} autohide>
                <Toast.Header >
                <strong className={(["mr-auto", "col-lg-11",classes[type]]).join(' ')}>{title}</strong>
                </Toast.Header>
                <Toast.Body>                    
                    <div className={classes[type]}>
                        {context}
                    </div>
                </Toast.Body>
            </Toast>
        </div>
}