import classes from './PageCounter.module.css';
import React from 'react';

export default function PageCounter(props){

    const handlePrevPageClicked = () => {
        if (props.handlePrevPageClicked)
            return props.handlePrevPageClicked();
    }

    const handleNextPageClicked = () => {
        if (props.handleNextPageClicked)
            return props.handleNextPageClicked();
    }

    return <div className={classes.container}>
        <button className={classes.counter} onClick={handlePrevPageClicked}>
             <span> &#8249; </span>
        </button>
        <span className={classes.displayPageInfo}> 
            Page {props.pageNumber} of {props.totalPages} 
        </span>
        <button className={classes.counter} onClick={handleNextPageClicked}> 
            <span> &#8250; </span> 
        </button>
    </div>
}