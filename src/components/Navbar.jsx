import React from 'react'
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'

const Navbar = ({SidebarToggle,setSidebarToggle}) => {
  return (
    <nav className="bg-green-600 px-4 py-3 flex justify-between ">
        <div className="flex items-center text-xl">
            <FaBars className=" text-white me-4 cursor-pointer" 
             onClick={()=>setSidebarToggle(!SidebarToggle)}/>
            <span className="text-white font-semibold">E-commerce</span>
        </div>
        <div className="flex items-center gap-x-5">
            <div className="relative md:w-65">
                <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                    <button className="p-1 focus:outline-none text-white md:text-black"><FaSearch/></button></span>
                <input type="text" className=" w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"/>

            </div>
            <div className="text-white">
                <FaBell/>
            </div>
            <div className="relative">
                <button className="text-white group">
                    <FaUserCircle className="w-6 h-6 mt-1"/>
                    <div className="z-10 bg-white hidden absolute rounded-lg shadow-32 group-focus:block top-full right-0">
                        <ul className="text-gray-800 py-2  ml-1 text-sm ">
                            <div className="hover:bg-red-500">
                            <li><a href="" >profile</a></li>
                            </div>
                            <div className="hover:bg-red-500">
                            <li><a href="" >settings </a></li>
                            </div>
                            <div className="hover:bg-red-500">
                            <li><a href="" >Log out</a></li>
                            </div>
                           
                            
                            
                        </ul>
                    </div>
                </button>
            </div>

        </div>

    </nav>
  )
}

export default Navbar