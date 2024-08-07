// TopHeader.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './TopHeader.css'; 

const TopHeader = () => {
    return (
        <motion.div
            className="top-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="nav-container">
                <div className="nav-left">
                <motion.a
                        href="#Home"
                        className="nav-item"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Home
                    </motion.a>
                    <motion.a
                        href="#about"
                        className="nav-item"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        About
                    </motion.a>
                    <motion.a
                        href="#resources"
                        className="nav-item"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Resources
                    </motion.a>
                    <motion.a
                        href="#faq"
                        className="nav-item"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        FAQ
                    </motion.a>
                    <motion.a
                        href="#team"
                        className="nav-item"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Meet the Team
                    </motion.a>
                    <motion.a
                        href="#stories"
                        className="nav-item"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Stories
                    </motion.a>
                </div>
                <div className="nav-right">
                    <motion.a
                        href="#donations"
                        className="nav-item"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        Donations
                    </motion.a>
                    <div className="contact-button-container">
                        <motion.a
                            href="https://www.instagram.com/starterhacks_/p/C9QJrgpSvU0/"
                            className="contact-button"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Contact us
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TopHeader;
