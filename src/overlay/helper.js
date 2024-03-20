import { motion } from "framer-motion";
import {AnimatePresence} from "framer-motion"

export const Wraper = (props) => {
  const { children, style, next = true, ...rest } = props;

  return (
    <motion.section
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          zIndex: "1",
          maxWidth: "700px",
          transform: "translateX(-50%)",
          width: "100vw",
          height: "100svh",
          ...style,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 , delay : 0.6} }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        {children}
      </motion.section>
  );
};


export function convertRange(value) {
  let _value = parseInt(value);
  if(_value <= 7) return "A"
  else if(_value <= 14) return "B"
  else return "C"
}
