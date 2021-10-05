
import React from 'react';
import { Card,Button } from 'react-bootstrap';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Card className="bg-primary text-white ">
            <Card.Img src= {"https://polylanguages.edu/wp-content/uploads/2020/04/International-Flags.jpg"} alt="Card image" />
            <Card.ImgOverlay className="m-5 p-5 fs-5 bg-dark w-50">
                <Card.Title className="fw-bold fs-2 ">Explor Language Around The World</Card.Title>
                <Card.Text className="fw-bold py-3 text-info">
                We are offering you 150 types of language from different countires. We also provided language for special children.We have different types of proggram about language.This is a wider card with supporting text below as a natural lead-in to 
                additional content. This content is a little bit longer.
                </Card.Text>
                <Button className="fw-bold" variant="warning">Ongoing Program</Button>
            </Card.ImgOverlay>
            </Card>
            <Services></Services>
        </div>
    );
};

export default Home;