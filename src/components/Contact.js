import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Styles
import styles from "../styles/Contact.module.css";


const Contact = () => {

    const contactVariants = {
        hidden: { opacity: 0, scale: 0.1 },
        visible: { opacity: 1, scale: 1 }
    }

    const contactRef = useRef();
    const isContactInView = useInView(contactRef, { once: true });
    const animateContact = useAnimation();

    useEffect(() => {
        if(isContactInView) {
            animateContact.start("visible");
        }
    }, [isContactInView])


    return (
        <div className={styles.mainContainer} id='contact'>
            <motion.div 
                className={styles.contactCard}
                ref={contactRef}
                variants={contactVariants}
                initial="hidden"
                animate={animateContact}
                transition={{ duration: 0.6, delay: 0.15 }}
            >
                <i className='fas fa-location-dot'></i>
                <h2>ADDRESS</h2>
                <p>3507 Lorem Street</p>
            </motion.div>

            <motion.div 
                className={styles.contactCard}
                variants={contactVariants}
                initial="hidden"
                animate={animateContact}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <i className='fas fa-phone'></i>
                <h2>PHONE</h2>
                <p>+90 535 08 24</p>
            </motion.div>

            <motion.div 
                className={styles.contactCard}
                variants={contactVariants}
                initial="hidden"
                animate={animateContact}
                transition={{ duration: 0.6, delay: 0.45 }}    
            >
                <i className='fas fa-envelope'></i>
                <h2>E-MAIL</h2>
                <p>business@info.com</p>
            </motion.div>
        </div>
    );
}
 
export default Contact;