import { textHeadingVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { FrameworkCard } from "@/components/card/frameworkCard";
import { Typingtext } from "@/components/typograhpy/typingText";
import { Framewokrs } from "@/constant/frameworks";

export const FramerworkChoose = () => {
  return (
    <div className="innerWidthLG mx-auto py-[80px] sm:py-[100px] flex flex-col-reverse sm:flex-row gap-10 sm:gap-0">
      <div className="flex-1 flex flex-wrap gap-3">
        {Framewokrs.map((fw, i) => (
          <FrameworkCard key={i} index={i} title={fw.title} icon={fw.icon} />
        ))}
      </div>
      <div className="flex-1">
        <motion.h1
          variants={textHeadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="typography-h leading-[1.1] font-extrabold text-center text-gradient"
        >
          Choose your engineering stack
        </motion.h1>
        <Typingtext
          text="Developer experience is a core principle of Stagger. Built on top of JSX, functional components and reactivity, learning Stagger is a piece of cake."
          textStyle="text-white/70 text-center text-[1.5rem] mt-5"
        />
      </div>
    </div>
  );
};
