import { createContext, useState, useCallback, FC, useContext } from "react";

type Props = {
  children: React.ReactNode;
};

type TInitial = {
  [key: string]: string | boolean | number | symbol | void | any;
};

const Navigation = createContext({} as TInitial);

export const NavigationCTX: FC<Props> = ({ children }) => {
  const [isExpands, setExpands] = useState(false);

  const toggleExpandsAction = useCallback(() => {
    setExpands((prev) => !prev);
  }, []);
  return (
    <Navigation.Provider value={{ isExpands, toggleExpandsAction }}>
      {children}
    </Navigation.Provider>
  );
};

export const useNavigationStore = () => useContext(Navigation);
