import Header from "./Header";
import MainContainer from "./Maincontainer";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/toggle";

const Body = () => {
   const dispatch=useDispatch()
   useEffect(() => {
    dispatch(toggleSidebar());   // open sidebar when home loads
  }, []);

  return (
    <div className="grid grid-cols-12">
      <SideBar/>
      <Outlet/>
    </div>
  );
};

export default Body;
//  <div className="flex flex-col h-screen">
//       {/* Sticky Header */}
//       <div className="sticky top-0 z-10">
//         <Header />
//       </div>

//       {/* Main layout area */}
//       <div className="flex flex-1 overflow-hidden [scrollbar-height:10px]">
//         {/* Sidebar (scrolls independently) */}
//         <div className="w-50 text-black overflow-y-auto">
//           <SideBar />
//         </div>

//         {/* Main content (scrolls independently) */}
//         <div className="flex-1 overflow-y-auto">
//          <Outlet/>
//         </div>
//       </div>
//     </div>

