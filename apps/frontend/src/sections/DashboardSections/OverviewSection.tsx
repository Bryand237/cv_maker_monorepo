import { motion } from "framer-motion";

const OverviewSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100dvw" }}
      animate={{ opacity: 1, x: "0" }}
      exit={{ opacity: 0, x: "-100dvw" }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
    >
      Vue d'ensemble
    </motion.div>
  );
};

export default OverviewSection;
