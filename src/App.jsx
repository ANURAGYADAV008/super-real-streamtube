import Body from "./Components/Body"
import MainContainer from "./Components/Maincontainer";
import MainVideo from "./Components/Mainvideo";
import appStore from "./utils/Appstore";
import {Provider} from "react-redux"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Body/>,
        children:[
            {
                path:"/",
                element:<MainContainer/>
            },
            {
                path:"/watch",
                element:<MainVideo/>
            }
        ]
        
    }
])

const App = () => {
    return (
        <Provider store={appStore}>
            
            <RouterProvider router={approuter}></RouterProvider>

            
        </Provider>
        
    )

}
export default App;