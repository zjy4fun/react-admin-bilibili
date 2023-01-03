import { Link, useRoutes } from "react-router-dom" //占位符组件，类似于Vue中的router-view
import router from "./router"

function App() {
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link> */}
      {outlet}
    </div>
  )
}

export default App
