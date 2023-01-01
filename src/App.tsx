import { UpOutlined } from "@ant-design/icons"
import { Button } from "antd"


function App() {
  return (
    <div className="App">
      <Button type="primary">我们的按钮</Button>
      <UpOutlined style={{fontSize: '40px',color:'red'}}/>
    </div>
  )
}

export default App
