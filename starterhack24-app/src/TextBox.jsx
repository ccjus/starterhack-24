import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TextBox.css'; 

const DropdownItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-item">
            <motion.div
                className="dropdown-header"
                onClick={handleToggle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                {isOpen ? (
                    <span className="dropdown-title">- {title}</span>
                ) : (
                    <span className="dropdown-title">+ {title}</span>
                )}
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="dropdown-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p>{content}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const TextBox = () => {
    return (
        <div className="text-box-container">
            <DropdownItem
                title="Is the danger completely over once a wildfire is extinguished?"
                content="No, the danger is not completely over once a wildfire is extinguished as post-fire conditions can still pose several risks. For instance, soil erosion can occur due to the loss of vegetation that normally stabilizes the ground, leading to landslides and sediment runoff. Furthermore, water contamination can result from ash and debris entering waterways, affecting water quality and aquatic life. So, these ongoing risks require continued monitoring and management even after the flames are out."
            />
            <DropdownItem
                title="Are wildfires only caused by natural events?"
                content="Placeholder"
            />
            <DropdownItem
                title="How can wildfires be beneficial to the environment?"
                content="Placeholder"
            />
            <DropdownItem
                title="Can wildfires occur outside of hot weather conditions?"
                content="Placeholder"
            />
            <DropdownItem
                title="Why are wildfires still hard to control despite modern technology?"
                content="Placeholder"
            />
        </div>
    );
};

export default TextBox;
