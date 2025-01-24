import {ReactElement, ReactNode} from "react";

export interface MotionModelProps {
  className?: string;
  children?: ReactElement | ReactNode;
  duration?: number; // 单位是秒 ： 0.5
  delay?: number;
  startOpacity?: number;
  endOpacity?: number;
  scaleTo?: number;
  startY?: number;
  endY?: number;
}