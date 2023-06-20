import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Styles
import styles from "../styles/Options.module.css";


const Options = () => {

    const optionNames = [
        {
            optionName: "DESCRIPTION",
            optionImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            optionText1: "At ArchiVision Construction, we are more than just builders - we are creators, dreamers, and visionaries. With a passion for architecture and a commitment to excellence, we specialize in crafting exceptional spaces that inspire and transform. Backed by a team of experienced professionals, we bring together innovative designs."
        },
        {
            optionName: "SPECIFICATIONS",
            optionImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
            optionText1: "Welcome to ArchiVision Construction, where architecture and construction converge to redefine what's possible. With a rich legacy of successful projects and a client-focused approach, we have established ourselves as a trusted name in the industry. "
        },
        {
            optionName: "REVIEWS",
            optionImage: "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            optionText1: "At ArchiVision Construction, we offer a comprehensive range of services to cater to all your construction needs. From initial planning and design to construction management and post-construction services, our team has the expertise and experience to handle projects."
        }
    ];

    const [optionDetails, setOptionDetails] = useState(optionNames[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);


    const handleOptionClick = (optionIndex, optionName, optionText1, optionImage) => {
        console.log(optionNames[optionIndex]);

        setSelectedIndex(optionIndex);

        setOptionDetails({
            optionName: optionName,
            optionImage: optionImage,
            optionText1: optionText1
        });
    }


    const imageRef = useRef();
    const isImageInView = useInView(imageRef, { once: true });
    const animateImage = useAnimation();

    useEffect(() => {
        if(isImageInView) {
            animateImage.start("visible");
        }
    }, [isImageInView])


    return (
        <div className={styles.mainContainer}>
            <div className={styles.optionsNavbar}>
                {optionNames.map((item, index) => (
                    <h2 
                        key={index} 
                        style={{ 
                            backgroundColor: index === selectedIndex ? "var(--gold)" : "",
                            color: index === selectedIndex ? "var(--white)" : "var(--black)" 
                        }} 
                        onClick={() => handleOptionClick(index, item.optionName, item.optionText1, item.optionImage)}>{item.optionName}
                    </h2>
                ))}
            </div>

            <div className={styles.optionContainer}>
                <motion.img 
                    src={optionDetails.optionImage} 
                    alt="option-img" 
                    ref={imageRef}
                    variants={{
                        hidden: { opacity: 0, x: -200 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    animate={animateImage}
                    transition={{ duration: 0.6, delay: 0.3 }}
                />
                <div className={styles.optionContext}>
                    <h3>{optionDetails.optionName}</h3>
                    <p>{optionDetails.optionText1}</p>
                    <ul>
                        <li><i className='fas fa-chevron-right'></i>Lorem ipsum, dolor sit amet!</li>
                        <li><i className='fas fa-chevron-right'></i>Consectetur adipisicing elit temporibus.</li>
                        <li><i className='fas fa-chevron-right'></i>Minima earum laboriosam adipisci voluptatum!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Options;