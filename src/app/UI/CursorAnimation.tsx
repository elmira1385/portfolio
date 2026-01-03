"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CursorAnimation = ({ boxRef }:any) => {
const[visible,setVisible]=useState(false)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 800, damping: 40 });
  const smoothY = useSpring(y, { stiffness: 800, damping: 40 });

  useEffect(() => {
    if (!boxRef.current) return;

    const box = boxRef.current;

    const handleMove = (e:MouseEvent) => {
      const rect = box.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
      setVisible(true)
    };
    const handleLeave=()=>{
        setVisible(false)
    }

    box.addEventListener("mousemove", handleMove);
    box.addEventListener("mouseleave", handleLeave);
    return () => {box.removeEventListener("mousemove", handleMove);
     box.removeEventListener("mouseleave", handleMove);}
  }, [boxRef]);

  return (
    visible&&(
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="absolute w-40 h-40 rounded-full bg-[#2662d9]/12 blur-[30px]
                 pointer-events-none
                 -translate-x-1/2 -translate-y-1/2 z-[9999]"
    />)
  );
};
export default CursorAnimation