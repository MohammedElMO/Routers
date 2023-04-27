import React from "react";
import { NavLink, Outlet } from "react-router-dom";


 
const HostVanNavBar = () => (
    <React.Fragment>
        <nav className="flex  w-full mt-5 justify-start   items-center  py-2  ">
            <ul className="list-none  w-full py-4 flex gap-3 font-pop ml-auto justify-start ">
                <NavLink end to="." className="text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">Details</NavLink>
                <NavLink to="pricing" className="text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">Pricing</NavLink>
                <NavLink to="photos" className=" text-gray-500   font-semibold  text-md  hover:underline underline-offset-2">Photos</NavLink>
            </ul>
        </nav>
    </React.Fragment>
)
 
export default HostVanNavBar;