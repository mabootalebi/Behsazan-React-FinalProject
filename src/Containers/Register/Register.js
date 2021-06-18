import React, { memo } from 'react';
import { useHistory } from 'react-router';
import Button from '../../Components/UI/Button/Button';
import TextBoxInput from '../../Components/UI/Inputs/TextBoxInput/TextBoxInput';
import Anchor from '../../Components/UI/Links/Anchor/Anchor';
import { useAxios } from '../../Hooks/useAxios';
import useInput from '../../Hooks/useInput';
import useReduxDispatch from '../../Hooks/useReduxDispatch';
import classes from './Register.module.css';

function Register(props){

    const email = useInput('');
    const password = useInput('');
    const axios = useAxios();
    const dispatch = useReduxDispatch();
    const history = useHistory();

    const handleLoginClick = (e) => {
        e.preventDefault();

        axios.post('register', 
        {
            email:email.value,
            password:password.value
        }).then(result => {
            dispatch.Login(result.token);
            dispatch.DisplayToast('success', 'Welcome!', 'Successfully Signed Up and Logged In. Your Id: ' + result.id);

            setTimeout(() => {
                history.push('/HomePage');
            }, 2000);
        })
    }

    return <form onSubmit={handleLoginClick}>
            <div className={classes.container}>
                <div className={classes.title}> Register </div>
                <TextBoxInput required title="Email" type='email' name='email' {...email}/>
                <TextBoxInput required title="Password" type='password' name='password' {...password}/>
                <div>
                    <Button title="Sign Up" buttonType="success"/>
                </div>
                <div className={classes.anchor}>
                    <Anchor to="/">Already signed up? Login now!</Anchor>
                </div> 
            </div>
        </form>

}

export default memo(Register);