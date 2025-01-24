import {FC,} from "react";
import {motion} from "framer-motion";
import {MotionModelProps} from "@/components/animation/MotionModelProps";


const MotionBottom: FC<MotionModelProps> = (props: MotionModelProps) => {
  const {className, children} = props;
  return (
    <motion.div
      initial={{translateY: -50, opacity: 0.3}}
      whileInView={{translateY: 0, opacity: 1}}
      transition={{duration: 0.5, delay: props.delay}}
      viewport={{once: true}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionBottom;
