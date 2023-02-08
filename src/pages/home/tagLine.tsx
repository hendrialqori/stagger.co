import { Typingtext } from "@/components/typograhpy/typingText";
import styles from "@/styles";
import { textHeadingVariants } from "@/utils/motion";
import { motion } from "framer-motion";

export const TagLine = () => {
  return (
    <div
      className={`innerWidth mx-auto ${styles.flexCenter} my-8 py-[80px] sm:py-[100px] lg:mt-0 gap-10 relative`}
    >
      {/* <div className="gradient-02 top-0 left-[45vw]" /> */}
      <section className="text-center">
        <motion.h2
          variants={textHeadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-gradient-02 typography-h font-extrabold mb-7 leading-[1.1]"
        >
          Powerfully, Make it simple
        </motion.h2>
        <Typingtext
          text="Stagger tools simplify
        building professional sites while delivering best-in-class
        performance on the web."
          textStyle="text-white/70 text-[1.5rem] sm:text-[3rem]"
        />
      </section>
    </div>
  );
};
