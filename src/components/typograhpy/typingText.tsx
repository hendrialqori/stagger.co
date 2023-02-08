import { letterVarians, typingVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { FC } from "react";

type Props = {
  text: string;
  textStyle: string;
};

export const Typingtext: FC<Props> = ({ text, textStyle }) => {
  return (
    <motion.h2
      variants={typingVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={textStyle}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span variants={letterVarians} key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};
