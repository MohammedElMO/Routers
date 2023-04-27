import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import React from "react";


 
const LayOut = () => {
    return ( 
        <React.Fragment>
        <NavBar/>
        <main>
        <Outlet/>
        </main>
        <Footer/>

        </React.Fragment>
     );
}
 
export default LayOut;