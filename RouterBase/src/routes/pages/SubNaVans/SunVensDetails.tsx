import { Link, useParams } from "react-router-dom";
import Vens from "../../../data/Vens";
import {BiChevronLeft} from "react-icons/bi"
import React from "react";
import HostVanNavBar from "../../../components/layout/HostVansNavBar";
function SubVensDetails() {

    const HotedVan = useParams<{id:string}>()
    return (  

        <React.Fragment>
            <Link to="../vans" className=" w-fit before:content-[''] relative before:absolute  before:left-0 before:bottom-0  before:h-[2px] before:w-0  before:rounded before:bg-slate-400 flex items-center font-pop before:transition-all ease-in-out  ml-2 hover:before:w-[10rem]">
            <BiChevronLeft className="text-xl   "/>
            Back To All Vans
            </Link>
        {Vens.filter(v => v.id === parseInt(HotedVan.id!)).map(v => (
            <div className=" bg-white rounded-md p-3 m-5 shadow-2xl flex  gap-3 font-inter " key={v.id}>
                <img className=" w-[160.15px] h-[157.9px] object-cover rounded" src={v.imageUrl+v.id+".jpg"}  />
                <div className="flex flex-col   w-full pl-2 gap-4 ml-3 justify-start">
                    <button className={`rounded-md p-3  self-start font-semibold text-white bg${v.btn_variant.color}400 text-back`}>{v.btn_variant.label}</button>
                    <h1 className="text-3xl font-semibold">{v.title}</h1>
                    <div className="flex items-center">
                        <span className="font-bold text-2xl">${v.price}</span>
                        <span>/Day</span>
                    </div>
                </div>
            </div>
        ))}
        </React.Fragment>
    );
}

export default SubVensDetails;