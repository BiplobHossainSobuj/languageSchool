import React, { useState,useEffect } from 'react';
import {  Row } from 'react-bootstrap';
import Service from './../Service/Service';

const Services = () => {
    const [services, setService] = useState([])
    useEffect( ()=>{
        fetch('./serviceData.JSON')
        .then(res=>res.json())
        .then(data=>setService(data));
    },[]);

    return (
        <div className="m-5">
            <h1 className= "text-primary">Our Courses</h1>
            <Row xs={1} md={4} className="g-1 gy-4">
            {
                services.map(service => 
                    <Service    
                key = {service.key}
                service={service}
                ></Service> )
            }
            </Row>
        </div>
    );
};

export default Services;