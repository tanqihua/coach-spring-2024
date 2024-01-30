import { motion } from "framer-motion";
import {AnimatePresence} from "framer-motion"
const Quest = ({ children }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        height:
          "calc(95svw * 1.965 + (100svh - 95svw * 1.965)/2 - 1.965 * 0.4 * 95vw)",
        width: 95 + "vw",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        padding: "0 5%",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.6 } }}
    >
      {children}
    </motion.div>
  );
};

export default Quest;
