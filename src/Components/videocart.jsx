const Videocart=({items})=>{
    const {snippet}=items
    const {thumbnails,title}=snippet
    return (
        <div className="pt-0 w-65 bg-bottom shadow-lg rounded-b-md">
            <img alt="youtube" className="rounded-md" src={thumbnails?.medium?.url}></img>
           <p className="text-[12px] font-semibold p-1.5">{title}</p>

        </div>
    )
}
export default Videocart;