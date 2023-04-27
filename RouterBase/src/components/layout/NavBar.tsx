import React from "react"
import { Link,NavLink, Outlet } from "react-router-dom"
import Footer from "./Footer"


function NavBar () {

    return (
        <React.Fragment>

        <nav className="flex w-full bg-[#f7c2b7c8] items-center px-2 py-2 rounded-tr-lg rounded-tl-lg ">
         <NavLink to="/" className="text-black text-2xl font-pop font-bold">#VANLIFE</NavLink>
            <ul className="list-none  w-full p-4 flex gap-3 font-pop ml-auto justify-end ">
            <NavLink to="/about" className="text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">About</NavLink>
            <NavLink to="/host" className="text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">Host</NavLink>
            <NavLink to="/vens" className="text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">Vens</NavLink>
               
            </ul>
        </nav>
        </React.Fragment>
    )
}

export default NavBar
