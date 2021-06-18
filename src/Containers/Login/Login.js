import React, { memo } from 'react';
import { useHistory } from 'react-router';
import Button from '../../Components/UI/Button/Button';
import TextBoxInput from '../../Components/UI/Inputs/TextBoxInput/TextBoxInput';
import { useAxios } from '../../Hooks/useAxios';
import useInput from '../../Hooks/useInput';
import useReduxDispatch from '../../Hooks/useReduxDispatch';
import classes from './Login.module.css';

function Login(props){

    const email = useInput('');
    const password = useInput('');
    const axios = useAxios();
    const dispatch = useReduxDispatch();
    const history = useHistory();

    const handleLoginClick = (e) => {
        e.preventDefault();

        axios.post('login', 
        {
            email:email.value,
            password:password.value
        }).then(result => {
            dispatch.Login(result.token);
            dispatch.DisplayToast('success', 'Successfully Logged In', 'Welcome');

            setTimeout(() => {
                history.push('/HomePage');
            }, 1000);
        })
    }

    return <form onSubmit={handleLoginClick}>
            <div className={classes.container}>
                <div className={classes.title}> Login </div>
                <TextBoxInput required title="Email" type='email' name='email' {...email}/>
                <TextBoxInput required title="Password" type='password' name='password' {...password}/>
                <div>
                    <Button title="Login" buttonType="success"/>
                </div>        
            </div>
        </form>
}

export default memo(Login);