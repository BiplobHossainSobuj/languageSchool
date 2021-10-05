import {Button, Card, Col} from 'react-bootstrap';
import React from 'react';

const Service = (props) => {
    const {title,description,price,img} = props.service;
    return (
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card>
                <Card.Img style= {{height:'180px',width:'284px'}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Button variant="primary">Purchase</Button>
                </Card.Body>
            </Card>
        </Card>
        </Col>
    );
};

export default Service;