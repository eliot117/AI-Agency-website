'use client';
import React, { ElementType } from 'react';
import { motion, Variants } from 'motion/react';

export interface TextAnimationProps {
  text?: string;
  children?: React.ReactNode;
  as?: ElementType;
  classname?: string;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  letterAnime?: boolean;
  lineAnime?: boolean;
  variants?: {
    hidden?: Record<string, any>;
    visible?: Record<string, any>;
  };
  delay?: number;
  duration?: number;
  viewport?: {
    amount?: number | 'some' | 'all';
    margin?: string;
    once?: boolean;
  };
  style?: React.CSSProperties;
  id?: string;
}

export const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  children,
  as: Component = 'div',
  classname = '',
  className = '',
  direction = 'up',
  letterAnime = false,
  lineAnime = false,
  variants,
  delay = 0,
  duration = 0.5,
  viewport = { amount: 0.2, margin: '0px 0px -40px 0px', once: true },
  style,
  id,
}) => {
  const combinedClassName = `${classname} ${className}`.trim();

  const getDirectionalOffset = () => {
    switch (direction) {
      case 'down':
        return { y: -50, x: 0 };
      case 'left':
        return { x: 50, y: 0 };
      case 'right':
        return { x: -50, y: 0 };
      case 'up':
      default:
        return { y: 50, x: 0 };
    }
  };

  const offset = getDirectionalOffset();

  const hiddenY = variants?.hidden?.y !== undefined
    ? (typeof variants.hidden.y === 'number' ? variants.hidden.y * 2.5 : variants.hidden.y)
    : offset.y;
  const hiddenX = variants?.hidden?.x !== undefined
    ? (typeof variants.hidden.x === 'number' ? variants.hidden.x * 2.5 : offset.x)
    : offset.x;

  const defaultVariants: Variants = {
    hidden: {
      filter: 'blur(8px)',
      opacity: 0,
      ...(variants?.hidden || {}),
      x: hiddenX,
      y: hiddenY,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration ? Math.max(duration, 0.65) : 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
        ...(variants?.visible?.transition || {}),
      },
      ...(variants?.visible || {}),
    },
  };

  const MotionComponent = React.useMemo(() => motion.create(Component), [Component]);

  if (letterAnime && text) {
    const letters = text.split('');
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.02,
          delayChildren: delay,
        },
      },
    };

    const letterVariants: Variants = {
      hidden: {
        filter: variants?.hidden?.filter || 'blur(4px)',
        opacity: 0,
        y: variants?.hidden?.y ?? 12,
      },
      visible: {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
        transition: {
          duration: variants?.visible?.transition?.duration || 0.3,
          ease: 'easeOut',
        },
      },
    };

    return (
      <MotionComponent
        id={id}
        style={style}
        className={combinedClassName}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: viewport.once ?? true,
          amount: viewport.amount ?? 0.2,
          margin: viewport.margin ?? '0px 0px -40px 0px',
        }}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  if (lineAnime && text) {
    const words = text.split(' ');
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: delay,
        },
      },
    };

    const wordVariants: Variants = {
      hidden: {
        filter: 'blur(6px)',
        opacity: 0,
        y: offset.y,
        x: offset.x,
      },
      visible: {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: duration || 0.4,
          ease: 'easeOut',
        },
      },
    };

    return (
      <MotionComponent
        id={id}
        style={style}
        className={combinedClassName}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: viewport.once ?? true,
          amount: viewport.amount ?? 0.2,
          margin: viewport.margin ?? '0px 0px -40px 0px',
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mr-1.5 last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      id={id}
      style={style}
      className={combinedClassName}
      variants={defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: viewport.once ?? true,
        amount: viewport.amount ?? 0.2,
        margin: viewport.margin ?? '0px 0px -40px 0px',
      }}
    >
      {text ?? children}
    </MotionComponent>
  );
};

export default TextAnimation;
