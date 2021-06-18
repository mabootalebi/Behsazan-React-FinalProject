import React from 'react';
import { withAuthorized } from '../../HOC/withAuthorized';
import classes from './HomePage.module.css';

function HomePage(){
    return <div className={classes.container}>
        <div style={{padding:'80px'}}>
        <div className={classes.title}>Final Project</div>
        <div className={classes.context}>
            Behsazan React Course
            <br/>
            (Test with Req|Res APIs)
        </div>
        </div>
    </div>
}

export default withAuthorized(HomePage);