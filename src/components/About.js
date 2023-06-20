import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Styles
import styles from "../styles/About.module.css";


const About = () => {

    const imageRef = useRef();
    const isImageInView = useInView(imageRef, { once: true });
    const imageAnimate = useAnimation();

    useEffect(() => {
        if(isImageInView) {
            imageAnimate.start("visible");
        }
    }, [isImageInView]);


    const titleRef = useRef();
    const isTitleInView = useInView(titleRef, { once: true });
    const titleAnimate = useAnimation();

    useEffect(() => {
        if(isTitleInView) {
            titleAnimate.start("visible");
        }
    }, [isTitleInView]);


    return (
        <div className={styles.mainContainer} id='about'>
            <motion.div 
                className={styles.aboutImage}
                ref={imageRef}
                variants={{ 
                    hidden: { opacity: 0, x: "-200px" },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={imageAnimate}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <img src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
            </motion.div>


            <div className={styles.aboutContext}>
                <motion.h1 
                    ref={titleRef}
                    variants={{
                        hidden: { opacity: 0, x: "200px" },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={titleAnimate}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Unleashing the Power of Design, Construction with Precision: ArchiVision - Your Trusted Partner
                </motion.h1>

                <div className={styles.seperator}></div>

                <motion.p 
                    className={styles.mainText}
                    variants={{
                        hidden: { opacity: 0, x: "200px" },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={titleAnimate}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Welcome to ArchiVision Construction, where architecture and construction converge to redefine what's possible. With a rich legacy of successful projects and a client-focused approach, we have established ourselves as a trusted name in the industry. Our team of architects, designers, and builders share a common passion for creating spaces that not only reflect your unique vision but also enhance the way you live, work, and play. From concept to completion, we are committed to delivering excellence in every aspect of our work.
                </motion.p>

                <motion.div 
                    className={styles.aboutTextBox}
                    variants={{
                        hidden: { opacity: 0, x: "200px" },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={titleAnimate}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <p>With a passion for architecture and a commitment to excellence, we specialize in crafting exceptional spaces that inspire and transform. Backed by a team of experienced professionals, we bring together innovative designs, advanced construction techniques to deliver projects that exceed expectations. Whether it's residential, commercial, or industrial.</p>
                    <a href="#">Explore</a>
                </motion.div>
            </div>
        </div>
    );
}
 
export default About;