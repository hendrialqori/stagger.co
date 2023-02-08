import { websiteCardVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
  index: number;
  name: string;
  imgUrl: string;
};

const posistion = (index: number) => {
  if ([1, 3].includes(index)) return "lg:translate-y-5";
  else if (index === 2) return "lg:translate-y-10";
};

export const WebsiteCard: FC<Props> = ({ index, name, imgUrl }) => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <motion.figure
      variants={websiteCardVariants}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={{ once: true, amount: 0.25 }}
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
      className={`${posistion(index)} relative overflow-hidden`}
    >
      <Image
        className="object-cover aspect-[4/2] lg:aspect-[auto] md:w-[300px] md:h-[200px] flex-1 lg:flex-0 rounded-lg z-1"
        src={imgUrl}
        alt={`${name}-picture`}
        effect="blur"
      />
      <figcaption
        className={`absolute z-10 ${
          showTitle ? "bottom-1" : "-bottom-12"
        } bg-black/80 left-0 right-0  py-4 text-center text-white/70 tracking-wide font-extralight transition-[background-color] duration-200`}
      >
        {name}
      </figcaption>
    </motion.figure>
  );
};
