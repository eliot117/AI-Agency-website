'use client';
import React from 'react';
import { motion, type TargetAndTransition, type Transition, type UseInViewOptions } from 'motion/react';

export interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  viewport?: {
    amount?: number | 'some' | 'all';
    margin?: string;
    once?: boolean;
  };
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  style?: React.CSSProperties;
  id?: string;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  direction = 'up',
  viewport = { amount: 0.2, margin: '0px 0px -40px 0px', once: true },
  className = '',
  delay = 0,
  duration = 0.75,
  distance = 64,
  style,
  id,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -distance, y: 0 };
      case 'right':
        return { opacity: 0, x: distance, y: 0 };
      case 'down':
        return { opacity: 0, x: 0, y: -distance };
      case 'none':
        return { opacity: 0, x: 0, y: 0 };
      case 'up':
      default:
        return { opacity: 0, x: 0, y: distance };
    }
  };

  const initial = getInitialPosition();

  return (
    <motion.div
      id={id}
      style={style}
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{
        once: viewport.once ?? true,
        amount: viewport.amount ?? 0.2,
        margin: viewport.margin ?? '0px 0px -40px 0px',
      }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
