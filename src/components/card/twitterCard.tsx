import { FC } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { twitterCardVariants } from "@/utils/motion";
import { motion } from "framer-motion";

type Props = {
  imgUrl: string;
  index: number;
  fullname: string;
  username: string;
  tweet: string;
};

export const TwitterCard: FC<Props> = ({
  imgUrl,
  index,
  fullname,
  username,
  tweet,
}) => {
  return (
    <motion.figure
      variants={twitterCardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      custom={index}
      className="bg-white hover:bg-gray-100 rounded-lg p-3 w-[300px] mx-3"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2" aria-label="avatar">
          <img
            src="/hendri-twitter.jpeg"
            className="h-10 w-10 object-cover rounded-full"
            alt={`${fullname}-avatar`}
          />
          <div className="leading-[1.2]">
            <h3 className="font-semibold">Hendri Alqori</h3>
            <p className="text-sm text-gray-600">@hendrialqori</p>
          </div>
        </div>
        <AiOutlineTwitter className="text-3xl text-blue-500" />
      </div>
      <figcaption className="py-3 px-1 leading-[1.3] text-lg font-thin">
        Great web app builder!, Who person at the background this Website.
        He/she have brilliat idea!
      </figcaption>

      <p className="text-sm text-gray-600">12:48 AM | Feb, 23 2022</p>
    </motion.figure>
  );
};
