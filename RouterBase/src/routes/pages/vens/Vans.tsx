import React from "react";
import { Link, useNavigate, } from "react-router-dom";
import vans from "../../../data/Vens";
   

const Vens = () => {
 const loacation = useNavigate()

    
    return (
        <React.Fragment>
            <section className="grid grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-2 x-sm:grid-cols-2 phone:grid-cols-1   p-6">
                
            {
                vans.map(van =>(
                <article key={van.id} className="font-inter " >
                    <Link to={`/vens/${van.id}`}>
                        <div className="hero">
                            <img src={van.imageUrl + (van.id) + ".jpg"} className="w-[300px]  rounded-md object-cover bg-center bg-no-repeat" alt="" />
                        </div>
                        <div className="flex mt-4 justify-between items-center  ">
                            <h3 className="text-xl ">{van.title}</h3>
                            <div className="w-1/2 flex  mr-auto flex-row md:flex-row sm:flex-col">
                                <span>${van.price}</span>
                                <span>/day</span> 
                                
                            </div>
                        </div>
                            <button 
                            type="submit"
                            className={"rounded-md p-3 font-semibold text-white   font-inter my-5 " + "bg-orange-500" }
                            >
                                {van.btn_variant.label }
                            </button>
                        </Link>

                </article>



            ))

}
        <button className="font-pop text-lg bg-slate-500 " onClick={() => loacation("/") }>Go Home</button>
</section>
        </React.Fragment>
    );
}
 
export default Vens;



