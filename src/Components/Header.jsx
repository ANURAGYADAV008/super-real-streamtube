import { List, Search, Plus, Bell, CircleUser } from "lucide-react";
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../utils/toggle"; // match the export exactly


const Header = () => {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar);


  return (
    <div className="w-full p-4 bg-white text-black  shadow-lg ">
      <div className="flex items-center justify-between space-x-4">
        {/* Left section */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <button onClick={() => dispatch(toggleSidebar())} className="cursor-pointer">
            <List />
          </button>
          <img
            src="https://www.youtube.com/s/desktop/3d178601/img/favicon_32x32.png"
            alt="My-Youtube"
          />
          <span className="font-bold text-lg">YOUTUBE</span>
        </div>

        {/* Middle section - search */}
        <div className="flex items-center border rounded-full px-2 py-1 w-150 font-mono">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent flex-1 px-2"
          />
          <Search className="text-gray-500" />
        </div>
        <div className="flex gap-2">
          <span><Plus /></span>
          <Bell />
          <CircleUser />
        </div>

      </div>

    </div>
  );
};

export default Header;



