import {Button, Card, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Service = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
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
                        <Button className= 'fw-bold' variant="success">{element} Purchase</Button>
                    </Card.Body>
                </Card>
            </Card>
        </Col>
    );
};

export default Service;