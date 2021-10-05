import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle,faSadTear } from '@fortawesome/free-solid-svg-icons'

const NotAvailable = () => {
    const element = <FontAwesomeIcon icon={faExclamationTriangle} />
    const sorry = <FontAwesomeIcon icon={faSadTear} />
    return (
        <div className="d-flex justify-content-center bg-warning ">
            <div  className="m-5 p-5">
                <h1>{element} 404</h1>
                <h3>{sorry} Sorry</h3>
                <h3>This page is not available </h3>
            </div>
        </div>
        
    );
};

export default NotAvailable;