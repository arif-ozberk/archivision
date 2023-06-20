import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Styles
import styles from "../styles/Categories.module.css";


const Categories = () => {

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
    }, [isCardInView])


    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>Archi<span>Vision</span> Services</h1>
            <p>From renovations and room additions to masonry and other handyman services.</p>
            <div className={styles.categoriesCont}>
                <div className={styles.categoriesRow}>
                    <motion.div 
                        className={styles.categoryCard}
                        ref={cardRef}
                        variants={cardVariants}
                        initial="hidden"
                        animate={animateCard}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <img src="https://images.unsplash.com/photo-1550136513-548af4445338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt="category-img" />
                        <h2>DESIGN-BUILD</h2>
                    </motion.div>
                    <motion.div 
                        className={styles.categoryCard}
                        variants={cardVariants}
                        initial="hidden"
                        animate={animateCard}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <img src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="category-img" />
                        <h2>REMODELING</h2>
                    </motion.div>
                </div>

                <div className={styles.categoriesRow}>
                    <motion.div 
                        className={styles.categoryCard}
                        variants={cardVariants}
                        initial="hidden"
                        animate={animateCard}
                        transition={{ duration: 0.6, delay: 0.45 }}
                    >
                        <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80" alt="category-img" />
                        <h2>CITY-SPACES</h2>
                    </motion.div>
                    <motion.div 
                        className={styles.categoryCard}
                        variants={cardVariants}
                        initial="hidden"
                        animate={animateCard}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <img src="https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="category-img" />
                        <h2>CIVIL ENGINEERS</h2>
                    </motion.div>
                </div>
            </div>
            <h4>Couldn't find what you looking for? Check out our extended catalog of services.</h4>
            <a href="#">VIEW MORE</a>
        </div>
    );
}
 
export default Categories;