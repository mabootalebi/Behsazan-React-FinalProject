import axios from 'axios';
import useReduxDispatch from './useReduxDispatch';


export function useAxios(){

    const dispatch = useReduxDispatch();

    const API_Instance = 
        axios.create({
            baseURL: 'https://reqres.in/api/'
        });


    const post = (url,data) => {
        dispatch.DisplayLoading();
        const result = new Promise((resolve, reject)=> {
            API_Instance.post(url,data)
                .then(result => {
                    resolve(result.data);
                })
                .catch(err =>{
                    if (err.response.status === 400){
                        console.log(err.response.data.error);
                        dispatch.DisplayToast('error', 'Login Failed',err.response.data.error);
                    }
                    else
                        reject(err);                    
                })
                .finally(fy => {
                    dispatch.HideLoading();
                })
        })
        return result;
    }
    
    const get = (url,data) => {
        dispatch.DisplayLoading();
        const result = new Promise((resolve, reject)=> {
            API_Instance.get(url,data)
                .then(result => {
                    resolve(result.data);
                })
                .catch(err =>{
                    if (err.response.status === 400){
                        console.log(err.response.data.error);
                    }
                    else
                        reject(err);                    
                })
                .finally(fy => {
                    dispatch.HideLoading();
                })
        })
        return result;
    }
     
    return {post, get};
    
}