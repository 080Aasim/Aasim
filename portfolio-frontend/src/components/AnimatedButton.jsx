import { motion } from "motion/react";

function AnimatedButton({ children, stiffness = 300, damping = 15 }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{scale: 0.9}}
      transition={{ type: "spring", stiffness, damping}}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedButton;
