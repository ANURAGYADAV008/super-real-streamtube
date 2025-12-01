import Body from "./Components/Body"
import Header from "./Components/Header";
import MainContainer from "./Components/Maincontainer";
import MainVideo from "./Components/Mainvideo";
import appStore from "./utils/Appstore";
import {Provider} from "react-redux"
import {createBrowserRouter, RouterProvider,Routes, Route} from "react-router-dom"

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
                path:"/watch/:id",
                element:<MainVideo/>
            }
        ]
        
    }
])

const App = () => {
    return (
        <Provider store={appStore}>
            
            <Header/>
            <RouterProvider router={approuter}></RouterProvider>

            
        </Provider>
        
    )

}
export default App;