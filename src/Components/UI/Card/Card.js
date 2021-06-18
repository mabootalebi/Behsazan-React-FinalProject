import React from 'react';
import { Card } from 'react-bootstrap';
import classes from './Card.module.css';

export default function CustomCard({title, text, avatarUrl}){
    return <div className={classes.container}>
        <Card style={{ width: '45%', margin: 'auto' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={avatarUrl} />
    </Card>
  </div>
}