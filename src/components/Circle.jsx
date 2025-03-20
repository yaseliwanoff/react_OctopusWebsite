import React from 'react';
import { motion } from 'framer-motion';
import '@app/Circle.css';

const Circle = ({ isVisible, position }) => {
  return (
    <motion.div
      className={`circle ${isVisible ? 'visible' : ''}`}
      animate={{ left: position.x, top: position.y, opacity: isVisible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
    />
  );
};

export default Circle;
