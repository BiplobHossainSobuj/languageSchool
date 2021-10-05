import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const element = <FontAwesomeIcon icon={faSchool} />
    return (
        <Navbar bg="primary" variant="dark" className="py-3 justify-content-center">
            <h1 className="text-white">{element} Language School</h1>
                <Nav className="">
                    <Container className="">
                        <Link to="/home" className="m-5 text-white text-decoration-none fs-3">Home</Link>
                        <Link to="/services" className="m-5 text-white text-decoration-none fs-3">Services</Link>
                        <Link to="/blog" className="m-5 text-white text-decoration-none fs-3">Blog</Link>
                        <Link to="/about" className="m-5 text-white text-decoration-none fs-3">About Us</Link>
                    </Container>
                </Nav>
        </Navbar>  
    );
};

export default Header;