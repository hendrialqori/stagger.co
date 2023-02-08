import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="innerWidthLG mx-auto py-[40px]  sm:py-[80px]">
      <div className="w-full h-[.2px] bg-gray-800" />
      <div className="flex flex-col md:flex-row justify-between mt-6 gap-6 md:gap-0">
        <div>
          <h3 className="font-semibold text-gray-400 mb-2">
            Design Inspiration
          </h3>
          <ul className="text-white text-sm flex gap-3">
            <li>
              <a href="https://www.framer.com/" target="_blank">
                framer.com
              </a>
            </li>
            |
            <li>
              <a
                href="https://vuejs.org/"
                target="
            "
              >
                vue.org
              </a>
            </li>
            |
            <li>
              <a
                href="https://nextjs.org/"
                target="
            "
              >
                next.org
              </a>
            </li>
          </ul>
        </div>
        <div className="text-gray-400">
          <h3 className="font-bold text-lg mb-2 text-gradient-02">
            Stagger.co
          </h3>
          <p className="text-sm">2022 @All Right Reseved</p>
        </div>
      </div>
    </footer>
  );
};
