import { Typingtext } from "@/components/typograhpy/typingText";
import styles from "@/styles";
import { textHeadingVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";

export const NewsLetter = () => {
  return (
    <div
      className={`innerWidth mx-auto ${styles.flexCenter} flex-col-reverse sm:flex-row my-8 py-[100px] lg:mt-0 gap-10 relative`}
    >
      <section className="flex-1 order-1">
        <div className="gradient absolute right-24 top-[8vh]" />
        <motion.h3
          variants={textHeadingVariants}
          initial="hidden"
          whileInView="show"
          className="text-gradient font-extrabold text-[3.5rem] leading-[1.1]"
        >
          Stagger.co is getting better every day — don’t miss out on all the
          action.
        </motion.h3>
        <Typingtext
          text="Join the Stagger.co newsletter and stay updated on new releases and
          features, guides, and case studies."
          textStyle="text-white/70 text-[1.2rem] mt-10"
        />
      </section>
      <motion.form
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          type: "tween",
          ease: "linear",
        }}
        className="w-full sm:flex-[0.5]"
      >
        <div
          className={`border-[1px] border-gray-500 ${styles.flexCenter} rounded-md overflow-hidden`}
        >
          <div className="bg-black p-3">
            <HiOutlineMail className="text-white text-2xl" />
          </div>
          <span className="text-white">|</span>
          <input
            type="text"
            className="w-full bg-black p-3 text-white outline-none"
            placeholder="@your email"
          />
        </div>
        <button
          className="w-full bg-white text-black rounded-md py-3 mt-3 tracking-wide"
          type="submit"
        >
          Subscribe
        </button>
      </motion.form>
    </div>
  );
};
