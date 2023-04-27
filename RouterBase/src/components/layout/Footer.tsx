import React from "react";
import { Outlet } from "react-router-dom";



interface FoorterProps {
    
}
 
const Footer = () => {
    return (
        <React.Fragment>
        <footer className="w-full mt-auto p-6 bg-slate-800">
                <h3 className="font-pop text-sm text-gray-200 text-center">
                    @3944 VAnsOnly
                </h3>
        </footer> 
        </React.Fragment> 
     );
}
 
export default Footer;