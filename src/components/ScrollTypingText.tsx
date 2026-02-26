import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

const ScrollTypingText = ({ text, className = "" }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const chars = text.split("");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {chars.map((char, i) => (
        <ScrollChar key={i} char={char} index={i} total={chars.length} progress={scrollYProgress} />
      ))}
    </span>
  );
};

const ScrollChar = ({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.1, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);

  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

export default ScrollTypingText;
