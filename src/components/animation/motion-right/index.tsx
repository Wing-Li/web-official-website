import {FC,} from "react";
import {motion} from "framer-motion";
import {MotionModelProps} from "@/components/animation/MotionModelProps";


const MotionRight: FC<MotionModelProps> = (props: MotionModelProps) => {
  return (
    <motion.div
      initial={{translateX: 50, opacity: props.startOpacity ?? 0}}
      whileInView={{translateX: 0, opacity: props.endOpacity ?? 1}}
      transition={{duration: props.duration ?? 0.3, delay: props.delay}}
      viewport={{once: true}}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionRight;
