import { useParams } from "react-router-dom";
import Vens from "../../../data/Vens";
function SubVensDetails() {

    const HotedVan = useParams<{id:string}>()
    console.log(HotedVan.id);
    return (  

        <h1 className="tedxt-4xl text-blackven">
        {Vens.filter(v => v.id === parseInt(HotedVan.id!)).map(v => (
            <div className="flex p-3 gap-3 font-inter " key={v.id}>
                <img className="w-1/6 h-1/5 object-cover rounded" src={v.imageUrl+v.id+".jpg"}  />
                <div className="flex flex-col gap-3">
                    <button className={`rounded-md p-4 bg-${v.btn_variant.color}-500 text-white`}>{v.btn_variant.label}</button>
                    <h1 className="text-2xl font-semibold">{v.title}</h1>
                    <div className="flex">
                        <span className="font-bold">${v.price}</span>
                        <span>/Day</span>
                    </div>
                </div>
            </div>
        ))}
        </h1>
    );
}

export default SubVensDetails;