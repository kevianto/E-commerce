import { useState } from "react"
import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"


function App() {
  const [SidebarToggle,setSidebarToggle]=useState(false)

  return (
   <div>
    <Sidebar SidebarToggle={SidebarToggle}/>
    <Dashboard SidebarToggle={SidebarToggle}
    setSidebarToggle={setSidebarToggle}/>
   </div>
  )
}

export default App
