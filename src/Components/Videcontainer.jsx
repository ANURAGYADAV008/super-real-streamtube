import { useEffect, useState } from "react"
import Videocart from "./videocart";
import FeedButton from "./FeedButton";
const VideoContainer = () => {
    const [video, setVideo] = useState([]);
    const feed = ["All","Gaming", "Music", "Dsa", "Comedy", "Web", "Physics", "SciFie","News","Cricket","Action","Api"]
    

    useEffect(() => {
        handleYoutubevideo()

    }, [])

    const handleYoutubevideo = async () => {

            try {
                const response = await fetch("super-real-streamtube-production.up.railway.app");
                const data = await response.json();
                console.log(data?.video.items)
                setVideo(data?.video?.items);

            }
            catch (error) {
                console.log(error)

            }

        }
    


    return (
        <div>
            <div className="flex pt-5">
            {
              feed.map((name,idx)=>(
                <FeedButton key={idx} feed={name}/>
              ))
            }
            </div>


            <div className="flex flex-wrap gap-5 p-4">
            {
                video.length>0?(
                    video.map((items)=>(
                        <Videocart key={items.id} items={items}/>
                    ))
                ):(
                    <h1 className="">Loading</h1>
                )
            }
            
        </div>
        </div>


    );


}
export default VideoContainer;