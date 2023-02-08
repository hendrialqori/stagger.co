import { FC } from "react";
import { useLocation, Link } from "react-router-dom";

type Props = {
  href: string;
  title: string;
};

export const Alink: FC<Props> = ({ href, title }) => {
  const { pathname } = useLocation();

  const isMatch = pathname === href;
  return (
    <Link className={isMatch ? "text-gradient font-semibold" : ""} to={href}>
      {title}
    </Link>
  );
};
