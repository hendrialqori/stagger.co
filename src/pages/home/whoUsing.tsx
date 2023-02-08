import { WebsiteCard } from "@/components/card/websiteCard";
import { Websites } from "@/constant/websites";
import { textHeadingVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { FC } from "react";

export const WhoUsing: FC = () => {
  return (
    <section className="py-[80px] sm:py-[100px]">
      <motion.h3
        variants={textHeadingVariants}
        initial="hidden"
        whileInView="show"
        className="text-gradient-04 leading-[1.1] font-extrabold text-[3.5rem] text-center mb-10"
      >
        Who using stagger.co ?
      </motion.h3>
      <div
        className="flex justify-center flex-wrap lg:flex-nowrap gap-4 w-[full]"
        aria-label="websites-container"
      >
        {Websites.map((web, i) => (
          <WebsiteCard key={i} index={i} name={web.name} imgUrl={web.imgUrl} />
        ))}
      </div>
    </section>
  );
};
