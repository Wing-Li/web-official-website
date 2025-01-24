import {motion} from "framer-motion";
import {MotionModelProps} from "@/components/animation/MotionModelProps";

export function BreathingAnimation(props: MotionModelProps) {

  const {className, scaleTo} = props

  return (
    <motion.div
      className={className}
      animate={{scale: [1, scaleTo ?? 1.1, 1]}}
      transition={{duration: 1, repeat: Infinity, repeatType: 'reverse',}}
    >
      {props.children}
    </motion.div>
  );
}