import { TwitterCard } from "@/components/card/twitterCard";
import { Typingtext } from "@/components/typograhpy/typingText";
import { textHeadingVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export const Testimonial = () => {
  return (
    <section className="py-[80px] sm:py-[100px]">
      <div className="innerWidth mx-auto mb-8 pr-4">
        <motion.h3
          variants={textHeadingVariants}
          initial="hidden"
          whileInView="show"
          className="text-gradient-03 font-extrabold text-[3.5rem] leading-[1.1] w-[]"
        >
          What are they saying.
        </motion.h3>
        <Typingtext
          text="We are happy to receive comments from netizens"
          textStyle="text-white/70 text-[1.5rem] mt-3"
        />
      </div>
      <Marquee
        className="marquee-overlay h-min"
        gradient={false}
        pauseOnHover={true}
      >
        <div className="flex gap-1 py-3" aria-label="marquee-wrapper">
          {Array.from({ length: 8 }).map((_, i) => (
            <TwitterCard
              key={i}
              index={i}
              fullname="Hendri Alqori"
              imgUrl="./"
              username="@hendrialqori"
              tweet="test"
            />
          ))}
        </div>
      </Marquee>
      {/* <div
        className="marquee-overlay relative flex gap-4"
        aria-label="marquee-container"
      >
        <div
          className="flex gap-4 w-min marquee-container-left"
          aria-label="marquee-wrapper"
        ></div>
        <div
          className="flex gap-4 w-min marquee-container-left"
          aria-label="marquee-wrapper"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <TwitterCard
              key={i}
              index={i}
              fullname="Hendri Alqori"
              imgUrl="./"
              username="@hendrialqori"
              tweet="test"
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};
