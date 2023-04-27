
import { useLocation, useParams } from "react-router-dom";
import Vens from "../../../../data/Vens";
import query from "query-string"





 
const Pricing = () => {
const loacation =  useLocation()
  const HotedVan = useParams<{ id: string }>();
    const priceQuery = query.parse(loacation.hash)
    console.log(priceQuery);
    
    return ( 
        <div>
                {Vens.filter(v=>v.id === parseInt(HotedVan.id || "")).map(v => 
                    <div className="flex items-center" key={v.id}>
                        <span className="font-bold text-2xl">${v.price}</span>
                        <span>/Day</span>
                    </div>
                    )}
        </div>
        
     )
}
 
export default Pricing;