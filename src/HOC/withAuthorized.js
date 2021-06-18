import React from 'react';
import { useSelector } from 'react-redux';
import AccessDenied from '../Containers/AccessDenied/AccessDenied';

export function withAuthorized(Component){

    return (props)=> {
        const userLoggedIn = useSelector(store => store.LoggedIn);

        if (!userLoggedIn){
            return <AccessDenied/>
        }

        return <Component {...props}/>
    };
}