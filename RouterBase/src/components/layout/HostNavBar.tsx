import React from "react";
import { NavLink, Outlet } from "react-router-dom";


function HostNavBar() {
    return (  
        <React.Fragment>

        <nav className="flex w-full justify-end  items-center px-2 py-2  ">
            <ul className="list-none  w-full p-4 flex gap-3 font-pop ml-auto justify-end "> 
            <NavLink  to="." className="text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">DasshBoard</NavLink>
            <NavLink  to="review" className="text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">Views</NavLink>
            <NavLink to="income" className=" text-gray-500   font-semibold  text-md  hover:underline underline-offset-2" >Incom</NavLink>
            <NavLink  to="vans" className=" text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">Vans</NavLink>
            </ul>
        </nav>
        <Outlet/>
        </React.Fragment>
    );
}

export default HostNavBar;