import { useDispatch } from 'react-redux';
import * as actionTypes from '../Store/actionTypes';

export default function useReduxDispatch(){
    const dispatch = useDispatch();

    const Login = (token) => {
        dispatch({
            type: actionTypes.Login,
            payLoad:{
                Token: token
            }
        })
    };

    const Logout = () => {
        dispatch({
            type: actionTypes.Logout
        })
    };

    const DisplayToast = (type,title,context) => {
        dispatch({
            type: actionTypes.DisplayToast,
            payLoad:{
                Type: type,
                Title: title,
                Context:context
            }
        })
    };

    const HideToast = () => {
        dispatch({
            type: actionTypes.HideToast
        })
    };

    const DisplayLoading = () => {
        dispatch({
            type: actionTypes.DisplayLoading
        })
    };

    const HideLoading = () => {
        dispatch({
            type: actionTypes.HideLoading
        })
    };

    return {
        Login,
        Logout,
        DisplayToast,
        HideToast,
        DisplayLoading,
        HideLoading
    }
}