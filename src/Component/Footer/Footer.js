import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const appStore = <FontAwesomeIcon icon={faAppleAlt} />
    return (
        <div className="bg-primary p-5 d-flex justify-content-evenly">
            <div>
                <h3>For more Information</h3>
                <p>Mail us languaage@info.com</p>
                <p>Contact over phone 099112747</p>
            </div>
            <div >
                <h3>Download our app</h3>
                <p>App Store {appStore}</p>
                <p>Play Store</p>
            </div>
            <div>
                <h3>Pay with</h3>
                <p>Master Card</p>
                <p>Visa Card</p>
            </div>
        </div>
    );
};

export default Footer;