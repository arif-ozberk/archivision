import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Styles
import styles from "../styles/Pricing.module.css";


const Pricing = () => {

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.1 },
        visible: { opacity: 1, scale: 1 }
    }

    const cardRef = useRef();
    const isCardInView = useInView(cardRef, { once: true });
    const animateCard = useAnimation();

    useEffect(() => {
        if(isCardInView) {
            animateCard.start("visible");
        }
    }, [isCardInView]);


    return (
        <div className={styles.mainContainer} id='pricing'>
            <h1 className={styles.mainTitle}>Consulting Pricing Table</h1>
            <div className={styles.seperator}></div>
            <h3>You can choose the plan suits you and your compay the best.</h3>
            <div className={styles.pricingContainer}>
                <motion.div 
                    className={styles.pricingCard}
                    ref={cardRef}
                    variants={cardVariants}
                    initial="hidden"
                    animate={animateCard}
                    transition={{ duration: 0.6 }}
                >
                    <h2>BASIC</h2>
                    <h1>$30</h1>
                    <ul>
                        <li>1 Full User</li>
                        <li>1000 Email Previews</li>
                        <li>1 Revisions</li>
                        <li>5 Contacts</li>
                    </ul>
                    <a href="#">Buy Now</a>
                </motion.div>
                <motion.div 
                    className={styles.pricingCard}
                    variants={cardVariants}
                    initial="hidden"
                    animate={animateCard}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <h2>STANDART</h2>
                    <h1>$60</h1>
                    <ul>
                        <li>10 Full User</li>
                        <li>5000 Email Previews</li>
                        <li>5 Revisions</li>
                        <li>10 Contacts</li>
                    </ul>
                    <a href="#">Buy Now</a>
                </motion.div>
                <motion.div 
                    className={styles.pricingCard}
                    variants={cardVariants}
                    initial="hidden"
                    animate={animateCard}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2>ENTERPRISE</h2>
                    <h1>$90</h1>
                    <ul>
                        <li>30 Full User</li>
                        <li>20000 Email Previews</li>
                        <li>Unlimited Revisions</li>
                        <li>20 Contacts</li>
                    </ul>
                    <a href="#">Buy Now</a>
                </motion.div>
            </div>
            <h4>*You can contact us anytime for personal membership types.</h4>
        </div>
    );
}
 
export default Pricing;