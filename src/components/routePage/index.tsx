import Home from "@/pages/home";
import LetsBuild from "@/pages/letsBuild";
import WhatNew from "@/pages/whatNew";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "@/components/ui/layout";

export default function AllRoute() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lets-build" element={<LetsBuild />} />
          <Route path="whats-new" element={<WhatNew />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
