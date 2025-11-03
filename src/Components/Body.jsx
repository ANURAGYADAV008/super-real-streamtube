import Header from "./Header";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10">
        <Header />
      </div>

      {/* Main layout area */}
      <div className="flex flex-1 overflow-hidden [scrollbar-height:10px]">
        {/* Sidebar (scrolls independently) */}
        <div className="w-64 text-black overflow-y-auto">
          <SideBar />
        </div>

        {/* Main content (scrolls independently) */}
        <div className="flex-1 overflow-y-auto">
         <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Body;

