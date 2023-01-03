import React, { lazy } from 'react'
import Home from '../views/Home'
// import About from '../views/About'
// import User from '../views/User'
const About = lazy(() => import('../views/About'))
const User = lazy(() => import('../views/User'))
import { Navigate } from "react-router-dom" //重定向组件

//懒加载模式需要我们添加一个 Loading 组件

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: 
        <React.Suspense fallback={<div>Loading</div>} >
            <About />
        </React.Suspense>
    },
    {
        path: "/user",
        element: 
        <React.Suspense fallback={<div>Loading</div>} >
            <User />
        </React.Suspense>
    }
]

export default routes;