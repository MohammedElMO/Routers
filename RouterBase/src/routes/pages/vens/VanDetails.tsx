import React from "react";
import { useParams } from "react-router-dom";
import vans from "../../../data/Vens";
export interface Van {
  id: number;
  description: string;
  title: string;
  price: number;
  imageUrl: string;
  btn_variant: {
    color: string;
    label: string;
  };
}



const VanDetails = () => {
  const param = useParams<{ id: string }>();
  const selectdId =
    vans.find((ven) => ven.id === parseInt(param.id || "0")) || ({} as Van);

  return (
    <section>
      <article className="font-inter w-full h-full p-4 flex flex-col items-center">
        {[selectdId].map((Onlyven) => (
          <React.Fragment key={Onlyven.id}>
            
            <div className="hero">
              <img
                src={Onlyven.imageUrl + Onlyven.id + ".jpg"}
                className="phone:h-1/3 rounded-md object-cover bg-center bg-no-repeat"
                alt="Ven Car"
              />
            </div>  
            <div className="flex justify-start phone:w-full  w-1/2 x-sm:w-full ">
            <button
              type="submit"
              className="rounded-md
               p-3 font-semibold 
               text-white   
               font-inter my-5
                bg-orange-500
                phone
                "
            
            >
              {Onlyven.btn_variant.label}
            </button>
            </div>
            <div className="py-3 phone:w-full  w-[50%] flex justify-between items-center">
              <h3 className="text-2xl w-[20ch] phone:w-[30ch]">{Onlyven.title}</h3>
              <div className="flex flex-row w-full ml-auto justify-end  md:flex-row sm:flex-col">
                <span>${Onlyven.price}</span>
                <span>/day</span>
              </div>
            </div>
            <div className=" font-inter flex w-1/2 phone:w-full leading-8  section ">
                <p>{Onlyven.description}</p>
            </div>
            <div className="w-1/2 phone:w-full flex">
              <button
                type="submit"
                className={
                  "rounded-md  p-3 font-semibold text-white   font-inter my-5 bg-orange-500 hover:bg-orange-400  flex-auto"
                }
              >
                Rent This Van
              </button>
            </div>
            
          </React.Fragment>
        ))}
      </article>
    </section>
  );
};

export default VanDetails;
