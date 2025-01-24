import {FC,} from "react";
import {motion} from "framer-motion";
import {MotionModelProps} from "@/components/animation/MotionModelProps";


const MotionUp: FC<MotionModelProps> = (props: MotionModelProps) => {
  const {className, children} = props;
  return (
    <motion.div
      initial={{translateY: props.startY ?? 50, opacity: props.startOpacity ?? 0}}
      whileInView={{translateY: props.endY ?? 0, opacity: props.endOpacity ?? 1}}
      transition={{duration: props.duration ?? 0.45, delay: props.delay}}
      viewport={{once: true}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionUp;
