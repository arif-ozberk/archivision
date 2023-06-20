import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Styles
import styles from "../styles/WelcomePage.module.css";

// Components
import Navbar from './Navbar';


const WelcomePage = ({ isLoad }) => {


    return (
        <div className={styles.mainContainer} id='home' >
            <Navbar />
            <div className={styles.welcomeContext}>
                <div className={styles.welcomeTop}>
                    <motion.h1
                        initial={{ x: "-100px", opacity: 0 }}
                        animate={{ x: isLoad ? 0 : "", opacity: isLoad ? 1 : 0 }}
                        transition={{ duration: 0.6 }}
                        className={`${styles.welcomeTitle}`}
                    >Excellence in Construction<br />Innovation in Design</motion.h1>

                    <motion.p 
                        className={`${styles.welcomeText}`}
                        initial={{ x: "-100px", opacity: 0 }}
                        animate={{ x: isLoad ? 0 : "", opacity: isLoad ? 1 : 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        We believe in the power of architecture to shape the world around us. Step into a world of architectural marvels and limitless possibilities with ArchiVision Construction.
                    </motion.p>
                </div>
                <div className={styles.welcomeBottom}>
                    <motion.div 
                        className={styles.welcomeCard}
                        initial={{ y: "50px", opacity: 0 }}
                        animate={{ y: isLoad? 0 : "", opacity: isLoad ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                    >
                        <h2>BUILDING</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a href="#">Learn More</a>
                        <i className='fa-solid fa-building'></i>
                    </motion.div>
                    <motion.div 
                        className={styles.welcomeCard}
                        initial={{ y: "50px", opacity: 0 }}
                        animate={{ y: isLoad ? 0 : "", opacity: isLoad ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                    >
                        <h2>INDUSTRIAL</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a href="#">Learn More</a>
                        <i className='fa-solid fa-industry'></i>
                    </motion.div>
                    <motion.div 
                        className={styles.welcomeCard}
                        initial={{ y: "50px", opacity: 0 }}
                        animate={{ y: isLoad ? 0 : "", opacity: isLoad ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 1 }}
                    >
                        <h2>FUTURE</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a href="#">Learn More</a>
                        <i className='fa-solid fa-seedling'></i>
                    </motion.div>
                </div>

                
            </div>
        </div>
    );
}
 
export default WelcomePage;