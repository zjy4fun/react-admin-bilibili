import React, { lazy } from 'react'
import Home from '../views/Home'
// import About from '../views/About'
// import User from '../views/User'
const About = lazy(() => import('../views/About'))
const User = lazy(() => import('../views/User'))
const Page1 = lazy(() => import('../views/Page1'))
const Page2 = lazy(() => import('../views/Page2'))
import { Navigate } from "react-router-dom" //重定向组件

//懒加载模式需要我们添加一个 Loading 组件

const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading</div>} >
        {comp}
    </React.Suspense>
)

const routes = [
    // 嵌套路由
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            }
        ]
    }
]

export default routes;