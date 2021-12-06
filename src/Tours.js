import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <div className="fs-1 fw-bolder text-center my-4">Playas de Alicante</div>
      <div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Tours;
