import { useNavigationStore } from "@/context/navigation/store";
import { hamburgerVariants } from "@/utils/motion";
import { motion } from "framer-motion";

export const Hamburger = () => {
  const { toggleExpandsAction } = useNavigationStore();
  return (
    <button onClick={toggleExpandsAction}>
      <motion.div
        variants={hamburgerVariants}
        initial="hidden"
        animate="show"
        className="w-[20px] md:hidden flex flex-col items-end gap-1"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-[2px] w-9/12 bg-white/90 rounded-md"
        ></motion.div>
        <div className="h-1 w-6/12 bg-white/90 rounded-md"></div>
        <div className="h-[4px] w-full bg-white/90 rounded-md"></div>
      </motion.div>
    </button>
  );
};
