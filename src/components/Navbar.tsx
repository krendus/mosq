import { RiHome4Fill } from "react-icons/ri";
import { IoMdFlame } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-black">
      <nav className="flex justify-between items-center px-4 py-2 shadow-md">
        <ul className="grid grid-cols-4 w-full">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "flex items-center justify-center flex-col active" : "flex items-center justify-center flex-col text-gray"
              }
            >
              <RiHome4Fill />
              <span className="text-[12px]">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                isActive ? "flex items-center justify-center flex-col active" : "flex items-center justify-center flex-col text-gray"
              }
            >
              <IoMdFlame />
              <span className="text-[12px]">Tasks</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wallet"
              className={({ isActive }) =>
                isActive ? "flex items-center justify-center flex-col active" : "flex items-center justify-center flex-col text-gray"
              }
            >
              <IoWallet />
              <span className="text-[12px]">Wallet</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/friends"
              className={({ isActive }) =>
                isActive ? "flex items-center justify-center flex-col active" : "flex items-center justify-center flex-col text-gray"
              }
            >
              <FaUserFriends />
              <span className="text-[12px]">Friends</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
