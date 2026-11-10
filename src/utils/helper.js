// Container animation variant for staggered child animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// General item animation variant for fading and moving up
export const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Text entrance animation variant
export const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Image slide-in animation variant
export const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

// Skill bar fill animation variant
export const skillBarVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: (level) => ({
    width: `${level}%`,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.3,
    },
  }),
};