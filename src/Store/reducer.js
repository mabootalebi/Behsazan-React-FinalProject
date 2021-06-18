import * as actionTypes from './actionTypes';

const initialToast = {
    type:'',
    title:'',
    context:'',
    display:false
}

const initialStore = {
    LoggedIn: false,
    Toast: initialToast,
    DisplayLoading: false
}

export function reducer(store = initialStore, action){
    switch(action.type){
        case actionTypes.Login:
            window.localStorage.setItem('token', action.payLoad.Token);
            return {
                ...store,
                LoggedIn: true
            }
        
        case actionTypes.Logout:
            window.localStorage.removeItem('token');
            return {
                ...store,
                LoggedIn: false
            }

        case actionTypes.DisplayToast:
            return{
                ...store,
                Toast:{
                    type: action.payLoad.Type,
                    title: action.payLoad.Title,
                    context: action.payLoad.Context,
                    display: true
                }
            }

        case actionTypes.HideToast:
            return {
                ...store,
                Toast: initialToast
            }

        case actionTypes.DisplayLoading:
            return{
                ...store,
                DisplayLoading: true
            }
        case actionTypes.HideLoading:
            return{
                ...store,
                DisplayLoading: false
            }
        default: return store
    }
}