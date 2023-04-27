import React from "react";
import { Link } from "react-router-dom";
import Vens from "../../../data/Vens";



function SubVens() {
    
    
    return ( 
        <div className="flex flex-col justify-start gap-4 font-inter p-4">
            <h1 className="text-4xl font-bold ">Your Hosted Vans</h1>
            {Vens.filter(v => v.hosted === "123").map(subVen => (
            <Link to={`${subVen.id}`} key={subVen.id}>
                <React.Fragment key={subVen.id}>
                        <div className="flex gap-2 p-4 w-full items-center justify-start bg-white shadow-lg rounded-md">
                                <img src={subVen.imageUrl+ subVen.id + ".jpg"} className="w-1/12  object-cover filter bg-gray-600 rounded" alt="" />
                            <div className="ml-4">
                                <h3 className="font-semibold">{subVen.title}</h3>
                                <span>${subVen.price}/day</span>
                            </div>
                        </div>
                    </React.Fragment>
            </Link>
            ))}
        </div>        
     );
}

export default SubVens;