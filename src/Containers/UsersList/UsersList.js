import React, { useEffect, useState } from 'react';
import CustomCard from '../../Components/UI/Card/Card';
import PageCounter from '../../Components/UI/PageCounter/PageCounter';
import { useAxios } from '../../Hooks/useAxios';
import classes from './UsersList.module.css';

export default function UsersList(props){

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState([]);
    const axios = useAxios();

    useEffect(()=> {
        axios.get('users?page='+ page)
            .then(result => {
                setUsers(result.data);
                setTotalPages(result.total_pages);
            })
    },[page,axios]);

    const handlePrevPageClicked = () =>{
        if (page > 1)
            setPage( currentState => {
                return currentState - 1
            });
    }

    const handleNextPageClicked = () =>{
        if (page < totalPages)
            setPage(currentState => {
                return currentState + 1
            });
    }

    return <>
        <div className={classes.title}>ReqRes Users</div>
        {users.map(u => <CustomCard key={u.id} 
                                    title={u.first_name} 
                                    text={u.email} 
                                    avatarUrl={u.avatar}/>)}
   
        <PageCounter pageNumber={page} totalPages={totalPages} handleNextPageClicked={handleNextPageClicked} handlePrevPageClicked={handlePrevPageClicked}></PageCounter>
    </>
}