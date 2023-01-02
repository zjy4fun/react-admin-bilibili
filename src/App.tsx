import { UpOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Outlet } from "react-router-dom" //占位符组件，类似于Vue中的router-view


function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  )
}

export default App
