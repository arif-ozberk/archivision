import React from 'react';
import { motion } from 'framer-motion';

// Styles
import styles from "../styles/Loader.module.css";

// Images
import logoImage from "../images/logo-gold.png";


const Loader = () => {
    return (
        <motion.div 
            className={styles.Loader}
            initial={{ height: "100vh" }}
            animate={{ height: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
        >
            <motion.div 
                className={styles.loaderCont} 
                initial={{ display: "flex" }} 
                animate={{ display: "none" }} 
                transition={{ delay: 2.5 }}
            >
                <div className={styles.loaderOut}>
                    <img src={logoImage} alt="" />
                    <div className={styles.loaderIn}></div>
                </div>
                <h1>Archi<span>Vision</span></h1>
            </motion.div>
        </motion.div>
    );
}
 
export default Loader;