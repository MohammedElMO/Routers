import React from "react";
import { NavLink, Outlet } from "react-router-dom";


 
const HostVanNavBar = () => (
    <React.Fragment>
        <nav className="flex w-full mt-5 justify-end  items-center px-2 py-2  ">
            <ul className="list-none  w-full p-4 flex gap-3 font-pop ml-auto justify-end ">
                <NavLink to="details" className="text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">Pricing</NavLink>
                <NavLink to="photos" className="text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">Details</NavLink>
                <NavLink to="pricing" className=" text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">Photoes</NavLink>
            </ul>
        </nav>
        <Outlet />
    </React.Fragment>
)
 
export default HostVanNavBar;