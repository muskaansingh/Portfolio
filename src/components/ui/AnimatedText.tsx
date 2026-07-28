import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: ElementType;
}

export function AnimatedText({ text, className, delay = 0, as: Component = "span" }: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: delay + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
