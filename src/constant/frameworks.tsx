import type { TFramework } from "@/types";
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiNuxtdotjs, SiAngularuniversal } from "react-icons/si";

export const Framewokrs = [
  {
    title: "Vue",
    icon: <FaVuejs className="text-gray-400 text-[3rem]" />,
  },
  {
    title: "React",
    icon: <FaReact className="text-gray-400 text-[3rem]" />,
  },
  {
    title: "Angular",
    icon: <FaAngular className="text-gray-400 text-[3rem]" />,
  },
  {
    title: "Universal",
    icon: <SiAngularuniversal className="text-gray-400 text-[3rem]" />,
  },
  {
    title: "Next",
    icon: <SiNextdotjs className="text-gray-400 text-[3rem]" />,
  },
  {
    title: "Nuxt",
    icon: <SiNuxtdotjs className="text-gray-400 text-[3rem]" />,
  },
] satisfies TFramework[];
