import { useEffect, useState } from "react"
import Videocart from "./videocart";
const VideoContainer = () => {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        handleYoutubevideo()

    }, [])

    const handleYoutubevideo = async () => {

            try {
                const response = await fetch("http://localhost:3050/api/v1/youtube/getvideo");
                const data = await response.json();
                console.log(data?.video.items)
                setVideo(data?.video?.items);

            }
            catch (error) {
                console.log(error)

            }

        }
    


    return (
        <div className="flex flex-wrap gap-4 p-4">
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


    );


}
export default VideoContainer;