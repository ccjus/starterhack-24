// i changed this to be the forest fire pic

import React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import './Helicopter.css'; 

const Helicopter = () => {
    const { scrollY } = useScroll();
    
    const x = useTransform(scrollY, [0, 1000], [0, -800], { clamp: false });
    const y = useTransform(scrollY, [0, 1000], [0, -600], { clamp: false }); 

    const opacity = useTransform(scrollY, [0, 1000], [1, 0], { clamp: false }); 

    const xMotionValue = useMotionValue(0);
    const yMotionValue = useMotionValue(0);
    const opacityMotionValue = useMotionValue(1);

    const xSpring = useSpring(xMotionValue, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(yMotionValue, { stiffness: 300, damping: 30 });
    const opacitySpring = useSpring(opacityMotionValue, { stiffness: 300, damping: 30 });

    React.useEffect(() => {
        return x.onChange(value => xMotionValue.set(value));
    }, [x, xMotionValue]);

    React.useEffect(() => {
        return y.onChange(value => yMotionValue.set(value));
    }, [y, yMotionValue]);

    React.useEffect(() => {
        return opacity.onChange(value => opacityMotionValue.set(value));
    }, [opacity, opacityMotionValue]);

    return (
        <motion.div
            className="helicopter-container"
            style={{
                x: xSpring,
                y: ySpring,
                opacity: opacitySpring
            }}
        >
            <img
                src="https://cdn.discordapp.com/attachments/1265748054946873515/1267149032124452894/ENNUTTNV75IKHDZ7NZFMLH4B4I.jpg?ex=66b3997f&is=66b247ff&hm=9e71ddef31851963e6f60d4ace4c90391f8f61f989f429d8c040e17d7f746ca1&"
                alt="Helicopter"
                className="helicopter-image"
            />
        </motion.div>
    );
};

export default Helicopter;
