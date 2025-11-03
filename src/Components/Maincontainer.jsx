import FeedButton from "./FeedButton";
import VideoContainer from "./Videcontainer";

const MainContainer=()=>{

    const feed = ["All","Gaming", "Music", "Dsa", "Comedy", "Web", "Physics", "SciFie","News","Cricket","Action","Api"]
    return (

      <div>
          <div className="flex pt-5">
            {
              feed.map((name,idx)=>(
                <FeedButton key={idx} feed={name}/>
              ))
            }
            </div>

            <div className="">
          <VideoContainer/>

        </div>
            
           
        </div>
          
        

        
      
    )
}
export default MainContainer;