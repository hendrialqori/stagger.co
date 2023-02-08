import { FC, useCallback, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navbarVariants } from "@/utils/motion";
import { Alink } from "@/components/typograhpy/active-link";
import { Hamburger } from "../icon/hamburger";

export const Navbar: FC = () => {
  const [showBorder, setShowBorder] = useState("");

  const scrollY = useCallback(() => {
    if (window.scrollY > 50) {
      setShowBorder("border-b-[1px] bg-black");

      return;
    }

    setShowBorder("");
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("scroll", scrollY);
    return () => window.removeEventListener("scroll", scrollY);
  }, []);

  return (
    <motion.header
      variants={navbarVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={`fixed left-0 right-0 ${
        showBorder || "bg-transparent"
      } border-b-gray-700 z-[99] `}
    >
      <nav className="innerWidthLG mx-auto flex items-center justify-between py-4">
        <h1 className="font-bold text-[1.2rem] tracking-wide text-gray-300">
          Stagger.co
        </h1>
        <Hamburger />
        <div className="hidden md:flex gap-6 items-center text-gray-300">
          <Alink href="/" title="Home" />
          <Alink href="#" title="Lets build" />
          <Alink href="#" title="Whats new?" />
          <Alink href="#" title="About" />
          <Link to="#">About us</Link>|<Link to="#">Sign in</Link>
          <Link
            to="#"
            className="text-primary py-1 px-2 rounded-md text-sm border-[1px] border-gray-400"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};
