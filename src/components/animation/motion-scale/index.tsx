import {FC,} from "react";
import {motion} from "framer-motion";
import {MotionModelProps} from "@/components/animation/MotionModelProps";


const MotionScale: FC<MotionModelProps> = (props: MotionModelProps) => {
  return (
    <motion.div
      initial={{opacity: props.startOpacity || 0, scale: 0.4}}
      whileInView={{opacity: props.endOpacity || 1, scale: props.scaleTo ?? 1}}
      transition={{duration: props.duration || 0.3, delay: props.delay}}
      viewport={{once: true}}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default MotionScale;
