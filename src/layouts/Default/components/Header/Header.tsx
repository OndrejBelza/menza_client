import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Header: FC = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="max-w-5xl mx-auto py-2 flex items-center">
        <Link to="/">
          <img alt="logo" src={logo} className="w-10 h-auto" />
        </Link>
        <div className="mt-2 ml-2 space-x-4">
          <Link to="/">
            <span className="font-semibold text-2xl text-blue-500">
              Menza life
            </span>
          </Link>

          <Link to="/">
            <span className="font-semibold text-blue-500">
              Seznam restaurací
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
