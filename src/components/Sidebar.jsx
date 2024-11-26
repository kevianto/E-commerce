import React from 'react'
import {FaCog, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt} from 'react-icons/fa'

const Sidebar = ({SidebarToggle}) => {
  return (
    <div className={`${SidebarToggle ? " hidden ":" block "}w-64 bg-green-600 fixed h-full px-4 py-2`}>
<div>
    <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
</div>
<hr />
<ul className="mt-3 text-white font-bold">
    <li className="mb-2 rounded hover:shadow hover:bg-slate-500 py-2">
        <a href="" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"/>
            Home
        </a>
    </li>
    <li className="mb-2 rounded hover:shadow hover:bg-slate-500 py-2">
        <a href="" className="px-3">
            <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2"/>
            Blogs
        </a>
    </li>
    <li className="mb-2 rounded hover:shadow hover:bg-slate-500 py-2">
        <a href="" className="px-3">
            <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2"/>
            Reports
        </a>
    </li>
    <li className="mb-2 rounded hover:shadow hover:bg-slate-500 py-2">
        <a href="" className="px-3">
            <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2"/>
            Inbox
        </a>
    </li>
    <li className="mb-2 rounded hover:shadow hover:bg-slate-500 py-2">
        <a href="" className="px-3">
            <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"/>
            Settings
        </a>
    </li>
</ul>
    </div>
    
  )
}

export default Sidebar