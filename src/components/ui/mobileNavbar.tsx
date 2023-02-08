import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { useNavigationStore } from "@/context/navigation/store";

export const MobileNavbar = () => {
  const { toggleExpandsAction } = useNavigationStore();
  return (
    <div className="fixed inset-0 bg-gray-200">
      <div className="flex items-center justify-end gap-7 my-2">
        <button onClick={toggleExpandsAction}>
          <GrFormClose className="text-2xl" />
        </button>
        <h1 className="font-bold text-[1.4rem] tracking-wide text-gray-500 text-right mr-3">
          Stagger.co
        </h1>
      </div>

      <div className="flex flex-col w-fit ml-auto mr-0 text-right p-5 gap-y-8 text-lg text-gray-700 font-light">
        <Link to="/">Home</Link>
        <Link to="#">Lets Build</Link>
        <Link to="#">Whats new</Link>
        <Link to="#">About us</Link>
        <div className="flex items-center flex-row-reverse gap-4">
          <Link to="#">Sign in</Link>|
          <Link to="#" className="text-white bg-black py-1 px-2 rounded-md">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
