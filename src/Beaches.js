import React from "react";
import Beach from "./Beach";

const Beaches = ({ beaches, removeBeach }) => {
  return (
    <>
      <div className="fs-1 fw-bolder text-center my-4">Playas de Alicante</div>
      <div>
        <div>
          {beaches.map((beach) => {
            return (
              <Beach key={beach.id} {...beach} removeBeach={removeBeach} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Beaches;
