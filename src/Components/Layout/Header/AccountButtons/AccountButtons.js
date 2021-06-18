import React from 'react';
import { useSelector } from 'react-redux';
import useReduxDispatch from '../../../../Hooks/useReduxDispatch';
import TabLink from '../../../UI/TabLink/TabLink';
import classes from './AccountButtons.module.css';

export default function AccountButtons(props){
    const userLoggedIn = useSelector(store => store.LoggedIn);
    const dispatch = useReduxDispatch();

    const handleClickLogout = () => {
        dispatch.Logout();
    }

    return <div className={classes.container}>
    {!userLoggedIn && <TabLink to="/">Login</TabLink>}
    {!userLoggedIn && <TabLink to="/Register">Register</TabLink>}

    {userLoggedIn && <TabLink to="/" onClick={handleClickLogout}>Logout</TabLink>}
    </div>
}