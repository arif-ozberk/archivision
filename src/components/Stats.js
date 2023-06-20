import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Styles
import styles from "../styles/Stats.module.css";


const Stats = () => {

    // Scroll view animation
    const statVariants = {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 }
    }

    const statRef = useRef();
    const isStatInView = useInView(statRef, { once: true });
    const statAnimate = useAnimation();

    useEffect(() => {
        if(isStatInView) {
            statAnimate.start("visible");
        }
    }, [isStatInView])


    // Stat Counters
    const [specCount, setSpecCount] = useState(0);
    const [clientCount, setClientCount] = useState(0);
    const [caseCount, setCaseCount] = useState(0);
    const [awardCount, setAwardCount] = useState(0);

    // UseEffect to update render on every count action
    useEffect(() => {
        if(!isStatInView) return;
        statCounter(201, specCount, setSpecCount, 5);
        statCounter(107, clientCount, setClientCount, 11);
        statCounter(43, caseCount, setCaseCount, 30);
        statCounter(25, awardCount, setAwardCount, 52);
    }, [specCount, clientCount, caseCount, awardCount, isStatInView]);

    // Counter Function
    // Counts up every 5 ms
    const statCounter = (limit, count, countFunc, speed) => {
        setTimeout(() => {
            if (count < limit) {
                countFunc(count + 1);
            }
            return count;
        }, speed);
    }


    return (
        <div className={styles.mainContainer}>
            <motion.div 
                className={styles.statCard} 
                ref={statRef}
                variants={statVariants}
                initial="hidden"
                animate={statAnimate}
                transition={{ duration: 0.4, delay: 0.15 }}
            >
                <i className='fas fa-user'></i>
                <h1>{specCount}</h1>
                <p>SPECIALISTS</p>
            </motion.div>
            <motion.div 
                className={styles.statCard}
                variants={statVariants}
                initial="hidden"
                animate={statAnimate}
                transition={{ duration: 0.4, delay: 0.3 }}
            >
                <i className='fas fa-users'></i>
                <h1>{clientCount}</h1>
                <p>CLIENTS</p>
            </motion.div>
            <motion.div 
                className={styles.statCard}
                variants={statVariants}
                initial="hidden"
                animate={statAnimate}
                transition={{ duration: 0.4, delay: 0.45 }}
            >
                <i className='fas fa-briefcase'></i>
                <h1>{caseCount}</h1>
                <p>OPEN CASES</p>
            </motion.div>
            <motion.div 
                className={styles.statCard}
                variants={statVariants}
                initial="hidden"
                animate={statAnimate}
                transition={{ duration: 0.4, delay: 0.6 }}
            >
                <i className='fas fa-trophy'></i>
                <h1>{awardCount}</h1>
                <p>AWARDS</p>
            </motion.div>
        </div>
    );
}
 
export default Stats;