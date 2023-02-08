import { FC } from "react";
import { Navbar } from "../ui/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigationStore } from "@/context/navigation/store";
import { MobileNavbar } from "./mobileNavbar";
import { bodyContentVariants } from "@/utils/motion";

export const Layout: FC = () => {
  const { isExpands } = useNavigationStore();
  return (
    <>
      <MobileNavbar />
      <motion.div
        variants={bodyContentVariants}
        custom={isExpands}
        animate="show"
        className="pt-8 sm:pt-14 bg-black relative overflow-hidden"
      >
        <AnimatePresence>
          {isExpands && (
            <motion.div className="absolute inset-0 bg-black/50 z-10 cursor-none" />
          )}
        </AnimatePresence>
        <Navbar />
        <Outlet />
        <Footer />
      </motion.div>
    </>
  );
};
