import React from 'react';

// Styles
import styles from "../styles/Footer.module.css";


const Footer = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.socials}>
                <a target='_blank' href="https://www.instagram.com/arif.ozberk.24/"><i className='fa-brands fa-instagram'></i></a>
                <a target='_blank' href="https://www.instagram.com/arif.ozberk.24/"><i className='fa-brands fa-twitter'></i></a>
                <a target='_blank' href="https://www.instagram.com/arif.ozberk.24/"><i className='fa-brands fa-facebook'></i></a>
            </div>
            <p>&copy; 2023 Archi<span>Vision</span> | All Rights Reserved</p>
        </div>
    );
}
 
export default Footer;