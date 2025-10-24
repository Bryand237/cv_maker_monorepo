import { motion } from "framer-motion";
const TemplateSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100dvw" }}
      animate={{ opacity: 1, x: "0" }}
      exit={{ opacity: 0, x: "-100dvw" }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
    >
      Templates
    </motion.div>
  );
};

export default TemplateSection;
