import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Styles
import styles from "../styles/Info.module.css";


const Info = () => {

    const animationVariants = {
        hidden: { opacity: 0, scale: 0.1 },
        visible: { opacity: 1, scale: 1 }
    }

    const cardRef = useRef();
    const isCardInView = useInView(cardRef, { once: true });
    const cardAnimate = useAnimation();

    useEffect(() => {
        if(isCardInView) {
            cardAnimate.start("visible");
        }
    }, [isCardInView]);


    return (
        <div className={styles.mainContainer} id='systems'>
            <h1>Systems In Archi<span>Vision</span></h1>
            <p className={styles.titleText}>
                Our services at ArchiVision Construction encompass a wide spectrum of construction solutions designed to bring your architectural vision to life. We specialize in architectural design, structural engineering, interior design, project management, and sustainable construction practices.
            </p>
            <div className={styles.cardContainer}>
                <div className={styles.cardRow}>
                    <motion.div 
                        className={`${styles.infoCard} ${styles.infoCardText}`}
                        ref={cardRef}
                        variants={animationVariants}
                        initial="hidden"
                        animate={cardAnimate}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>APPROACH</h2>
                        <p>We place our clients at the center of everything we do. We listen, understand their unique needs, and collaborate closely to ensure their vision becomes a reality. Our commitment to client satisfaction drives us to exceed expectations.</p>
                    </motion.div>
                    <div className={styles.infoCard}>
                        <img src="https://images.unsplash.com/photo-1632862378103-8248dccb7e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80" alt="info-card-img" />
                    </div>
                    <motion.div 
                        className={`${styles.infoCard} ${styles.infoCardText}`}
                        variants={animationVariants}
                        initial="hidden"
                        animate={cardAnimate}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>DESIGN</h2>
                        <p>We believe in the power of design to elevate spaces and enhance lives. Our team of talented architects and designers brings together creativity, technical expertise, and an unwavering attention to detail to create iconic structures that stand the test of time.</p>
                    </motion.div>
                </div>

                <div className={styles.cardRow}>
                    <div className={styles.infoCard}>
                        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="info-card-img" />
                    </div>
                    <motion.div 
                        className={`${styles.infoCard} ${styles.infoCardText}`}
                        variants={animationVariants}
                        initial="hidden"
                        animate={cardAnimate}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>FUTURE</h2>
                        <p>As stewards of the environment, we embrace sustainable practices in all aspects of our work. We strive to minimize our ecological footprint, incorporate energy-efficient technologies, and utilize sustainable materials.</p>
                    </motion.div>
                    <div className={styles.infoCard}>
                        <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="info-card-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Info;