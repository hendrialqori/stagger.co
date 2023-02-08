import { FC } from "react";
import styles from "@/styles";
import { motion } from "framer-motion";
import type { TFramework } from "@/types";
import { framerworkVariants } from "@/utils/motion";

export const FrameworkCard: FC<TFramework> = ({ index, title, icon }) => {
  return (
    <motion.figure
      variants={framerworkVariants}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={{ once: true, amount: 0.25 }}
      className={`rounded-md p-5 bg-white/10 w-[146px] sm:w-[150px] ${styles.flexCenter} flex-col gap-2`}
    >
      {icon}
      <figure className="text-gray-400 text-[1em]">{title}</figure>
    </motion.figure>
  );
};
