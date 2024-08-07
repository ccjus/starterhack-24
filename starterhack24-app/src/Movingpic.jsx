// I changed this to be the helicopter pic

import React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import './Movingpic.css'; 

const Movingpic = () => {
    const { scrollY } = useScroll();
    
    const x = useTransform(scrollY, [0, 1000], [0, -800], { clamp: false }); 
    const y = useTransform(scrollY, [0, 1000], [0, -600], { clamp: false }); 

    const xMotionValue = useMotionValue(0);
    const yMotionValue = useMotionValue(0);

    const xSpring = useSpring(xMotionValue, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(yMotionValue, { stiffness: 300, damping: 30 });

    React.useEffect(() => {
        return x.onChange(value => xMotionValue.set(value));
    }, [x, xMotionValue]);

    React.useEffect(() => {
        return y.onChange(value => yMotionValue.set(value));
    }, [y, yMotionValue]);

    return (
        <motion.div
            className="movingpic-container"
            style={{
                x: xSpring,
                y: ySpring
            }}
        >
            <img
                src="https://cdn.discordapp.com/attachments/1265748054946873515/1267012676404510847/images-removebg-preview.png?ex=66b3c342&is=66b271c2&hm=451ef284b5498e420cc9b58cd4c690068516f2cf11dbbec29214d2354773f115&"
                alt="Forest Fire"
                className="movingpic-image"
            />
        </motion.div>
    );
};

export default Movingpic;
