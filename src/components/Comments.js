import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Styles
import styles from "../styles/Comments.module.css";


const Comments = () => {

    const commentVariants = {
        hidden: { opacity: 0, scale: 0.1 },
        visible: { opacity: 1, scale: 1 }
    }

    const commentRef = useRef();
    const isCommentInView = useInView(commentRef, { once: true });
    const animateComment = useAnimation();

    useEffect(() => {
        if(isCommentInView) {
            animateComment.start("visible");
        }
    }, [isCommentInView])


    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>Hear From Our Clients</h1>
            <div className={styles.seperator}></div>
            <div className={styles.commentContainer}>
                <motion.div 
                    className={styles.commentCard}
                    ref={commentRef}
                    variants={commentVariants}
                    initial="hidden"
                    animate={animateComment}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reiciendis minus odit dolorem. Corporis nemo repellendus officiis esse repellat quasi! Lorem ipsum dolor sit amet."</p>
                    <div className={styles.commentInfo}>
                        <img src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="commenti-img" />
                        <div className={styles.infoContext}>
                            <h2>ARIF OZBERK AZMAK</h2>
                            <h3>CEO Company</h3>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className={styles.commentCard}
                    variants={commentVariants}
                    initial="hidden"
                    animate={animateComment}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum fugit sed molestias cupiditate, nemo amet tempore accusantium! Lorem ipsum dolor sit amet."</p>
                    <div className={styles.commentInfo}>
                        <img src="https://images.unsplash.com/photo-1642792735536-b6f7ef18b918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="commenti-img" />
                        <div className={styles.infoContext}>
                            <h2>JOHN BAKER</h2>
                            <h3>Financial Director</h3>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className={styles.commentCard}
                    variants={commentVariants}
                    initial="hidden"
                    animate={animateComment}
                    transition={{ duration: 0.6, delay: 0.45 }}
                >
                    <p>"Necessitatibus sit pariatur impedit iure sapiente. Nam nobis debitis voluptatem tempore eligendi minima nulla, ullam excepturi. Lorem ipsum dolor sit amet."</p>
                    <div className={styles.commentInfo}>
                        <img src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="commenti-img" />
                        <div className={styles.infoContext}>
                            <h2>LINDA FOSTER</h2>
                            <h3>HR Assistant</h3>
                        </div>
                    </div>
                </motion.div>

            </div>
            <a href="#">VIEW MORE</a>
        </div>
    );
}
 
export default Comments;