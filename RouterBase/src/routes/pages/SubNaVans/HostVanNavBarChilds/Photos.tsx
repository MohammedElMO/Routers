
import { useParams } from "react-router-dom";
import Vens from "../../../../data/Vens";


 
const Photos = () => {
    const HotedVan = useParams<{id:string}>()
    return ( 
        <div>
        {Vens.filter(v=>v.id === parseInt(HotedVan.id || "")).map(v => 
            <div className="flex items-center">
                <img className=" w-[103px] h-[101.56px] object-cover rounded" src={v.imageUrl+v.id+".jpg"}  />

            </div>
            )}
</div>
     );
}
 
export default Photos;