import Home from '../views/Home'
import About from '../views/About'
import User from '../views/User'
import {Navigate} from "react-router-dom" //重定向组件

const routes = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/user",
        element: <User />
    }
]

export default routes;