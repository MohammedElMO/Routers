import { useParams } from "react-router-dom";
import Vens from "../../../../data/Vens";
import React from "react";

const Details = () => {
  const HotedVan = useParams<{ id: string }>();

  return (
    <div className="flex flex-col gap-3 ">
      {Vens.filter((v) => v.id === parseInt(HotedVan.id || "")).map((v) => (
        <React.Fragment key={v.id}>
          <div className="flex items-center gap-1">
            <strong>Name: </strong>
            {v.title}
          </div>
          <div className="flex  gap-1">
            
            <span className="w-[35ch]">
                <strong>description :</strong>
                {v.description}</span>
          </div>
          <div className="flex  gap-1">
            <strong>Category: </strong>
            {v.btn_variant.label}
          </div>
          <div className="flex items-center gap-1">
            <strong>Visiblity: </strong>
            Public
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Details;
