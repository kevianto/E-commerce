import React from 'react'
import Navbar from './Navbar'

const Dashboard = ({SidebarToggle,setSidebarToggle } ) => {
  return (
    <div className={`${SidebarToggle? "":"ml-64"}`}>
        <Navbar SidebarToggle={SidebarToggle}
    setSidebarToggle={setSidebarToggle}/>
    </div> 
  )
}

export default Dashboard