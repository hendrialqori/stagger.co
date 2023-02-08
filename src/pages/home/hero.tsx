import { Typingtext } from "@/components/typograhpy/typingText";
import styles from "@/styles";
import { textHeadingVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { BsArrowRightShort, BsPersonCheckFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";

export const Hero = () => {
  return (
    <div className="py-[40px] md:py-[60px] lg:py-[120px] innerWidth mx-auto">
      <section>
        {/* text-gradient there in index.css */}
        <motion.h1
          variants={textHeadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="typography-h font-extrabold text-center text-gradient mt-5 scale-110"
        >
          Stagger.co
        </motion.h1>
        <motion.h2
          variants={textHeadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="typography-h leading-[1.1] font-bold text-center text-white/60 scale-90"
        >
          Build a great App <br className="hidden md:block" />
          Without open your code editor
        </motion.h2>
        <Typingtext
          text="An approachable, performant and versatile web builder for web user
        interfaces."
          textStyle="text-center text-xl text-gray-400 mt-5"
        />
      </section>
      <div
        className={`flex justify-center items-center sm:items-end flex-col sm:flex-row gap-10 mt-[3rem]`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
          }}
          className={`${styles.flexCenter} flex-col gap-3`}
        >
          <button
            className={`flex justify-center rounded-lg p-2 border-primary border-[1px] text-primary active:scale-90 transition-[transform] duration-200`}
          >
            Getting started
            <BsArrowRightShort className="text-2xl bg-transparent text-primary" />
          </button>
          <figure className="flex items-center gap-2 text-gray-400 text-sm">
            <BsPersonCheckFill className="text-xl text-primary" />
            <figcaption>1k+ of people's has used</figcaption>
          </figure>
        </motion.div>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
          }}
          className="text-center"
          aria-label="sponsor"
        >
          <h2 className="text-gray-400 text-sm">Special sponsor</h2>
          <figure className="mt-3">
            <IoLogoJavascript className="bg-black border-[1px] border-gray-500 text-[2.7rem] rounded-md w-fit mx-auto pt-3 pr-3 pl-1 pb-1 text-primary" />
            <figcaption className="text-gray-400 text-sm mt-3">
              Javascript Foundation
            </figcaption>
          </figure>
        </motion.section>
      </div>
    </div>
  );
};
