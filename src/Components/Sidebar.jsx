import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  SubscriptIcon,
  History,
  Video,
  GraduationCap,
  Watch,
  ThumbsUp,
  Scissors,
  ShoppingBag,
  Music,
  FilmIcon,
  Gamepad2Icon,
  NewspaperIcon,
  
} from "lucide-react";

const SideBar = () => {
  const sidebarOpen = useSelector((state) => state.sidebar.isMenuOpen); // state from store

   if (!sidebarOpen) return null;
   
   
   // hide sidebar if false

   return(
    <div className="col-span-2 border-r-2 pt-5">
      <Link to="/">
      <span className="flex pl-2 pb-4">
        <HomeIcon/>
        <p className="px-3">Home</p>
      </span>
      </Link>
      <span className="flex pl-2 pb-5">
        <Video/>
        <p className="px-3">Subscription</p>
      </span>
      <div className="border-t">
        <h1 className="font-bold pl-15 pb-5 pt-3">You</h1>
        <span className="flex pl-2 pb-4">
        <History/>
        <p className="px-3">History</p>
      </span>
      <span className="flex pl-2 pb-4">
        <Video/>
        <p className="px-3">Your Video</p>
      </span>
      <span className="flex pl-2 pb-4">
        <GraduationCap/>
        <p className="px-3">Course</p>
      </span>
      <span className="flex pl-2 pb-4">
        <Watch/>
        <p className="px-3">Watch Later</p>
      </span>
      <span className="flex pl-2 pb-4">
        <ThumbsUp/>
        <p className="px-3">Liked Videos</p>
      </span>
      <span className="flex pl-2 pb-2">
        <Scissors/>
        <p className="px-3">Your Clips</p>
      </span>
      {/*Base Part*/}
      <div className="border-t-2">
        <h1 className="font-bold pl-10 pb-5 pt-3">Explore</h1>
        <span className="flex pl-2 pb-4">
        <ShoppingBag/>
        <p className="px-3">Shopping</p>
      </span>
      <span className="flex pl-2 pb-4">
        <Gamepad2Icon/>
        <p className="px-3">Gaming</p>
      </span>
      <span className="flex pl-2 pb-4">
        <NewspaperIcon/>
        <p className="px-3">News</p>
      </span>
      <span className="flex pl-2 pb-4">
        <Music/>
        <p className="px-3">Music</p>
      </span>
      <span className="flex pl-2 pb-4">
        <FilmIcon/>
        <p className="px-3">Films</p>
      </span>
      <span className="flex pl-2 pb-4">
        <GraduationCap/>
        <p className="px-3">Course</p>
      </span>
      <span className="flex pl-2 pb-4">
        <History/>
        <p className="px-3">History</p>
      </span>

      </div>


      </div>
    </div>
   )

  
};

export default SideBar;
