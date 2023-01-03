import { Link, Outlet } from "react-router-dom" //占位符组件，类似于Vue中的router-view


function App() {
  return (
    <div className="App">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default App
