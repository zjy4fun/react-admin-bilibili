//组件形式的写法
import App from '../App'
import Home from '../views/Home'
import About from '../views/About'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function baseRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path='/' element={<Navigate to="/home"/>}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default baseRouter