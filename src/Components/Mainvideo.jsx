import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { closemenu } from "../utils/toggle";

const Mainvideo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // 🚀 Close sidebar when video page loads
  useEffect(() => {
    dispatch(closemenu());
  }, [dispatch]);

  return (
    <div className="p-1 col-span-10 flex gap-2">
       <div className="col-span-6 col-start-2">
        <iframe
        width="800"
        height="460"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

       </div>
       <div className="col-span-2 col-start-6 ">
        
   


       </div>

      
    </div>
  );
};

export default Mainvideo;
{/* <iframe
        width="800"
        height="460"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}