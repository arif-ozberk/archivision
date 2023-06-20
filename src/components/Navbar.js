import React, { useState } from 'react';
import { Link } from 'react-scroll';

// Styles
import styles from "../styles/Navbar.module.css";

// Images
import logoImage from "../images/logo-gold.png"


const Navbar = () => {

    const [isOn, switchIsOn] = useState(false);

    const collapseBtnHandler = () => {
        switchIsOn(isOn => !isOn);
    }


    return (
        <div className={`${styles.Navbar} ${isOn ? styles.collapseActive : ""}`}>
            <h1 className={styles.navbarLogo}><img src={logoImage} alt="" />Archi<span>Vision</span></h1>
            <ul className={`${styles.navbarLinks} ${isOn ? styles.linksActive : ""}`}>
                <li><Link 
                    onClick={() => switchIsOn(false)} 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500}
                >About</Link></li>

                <li><Link 
                    onClick={() => switchIsOn(false)} 
                    to="systems" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={700}
                >Systems</Link></li>

                <li><Link 
                    onClick={() => switchIsOn(false)} 
                    to="pricing" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={1300}
                >Pricing</Link></li>

                <li><Link 
                    onClick={() => switchIsOn(false)} 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={2000}
                >Contact</Link></li>
            </ul>
            <button
                className={styles.collapseButton}
                style={{ transform: isOn ? "rotate(180deg)" : "rotate(0)", color: isOn ? "var(--gold)" : "var(--white)" }}
            ><i onClick={collapseBtnHandler} className='fas fa-chevron-down'></i></button>
        </div>
    );
}
 
export default Navbar;