"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";

type AnimatedTitleProps = {
  children: string;
  className: string;
  wordSpace: string;
  charSpace: string;
  delay?: number;
};

export default function AnimatedTitle({
  children,
  className,
  wordSpace,
  charSpace,
}: AnimatedTitleProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0, // Initially hidden
      y: "0.25em", // Slightly shifted down
    },
    visible: {
      opacity: 1, // Stay fully visible
      y: "0em", // Reset to original position
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  
  return (
    <h2 role="heading" className={`text-white ${className}`}>
      {children.split(" ").map((word, index) => {
        return (
          <motion.span
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className={`inline-block whitespace-nowrap select-none ${wordSpace} text-white`}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  className={`inline-block ${charSpace} text-white`}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </h2>
  );
}
