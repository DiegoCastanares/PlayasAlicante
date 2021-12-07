import React, { useState } from "react";

const Beach = ({ removeBeach, id, image, info, price, name }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="card container border-0" style={{ width: "30rem" }}>
      <img
        src={image}
        className="card-img-top"
        style={{ height: "20rem", objectFit: "cover" }}
        alt={name}
      />
      <div className="card-body p-0 pt-2 my-2 row justify-content-between">
        <h5 className="card-title col-8">{name}</h5>
        <span className="card-text text-end text-danger fw-bolder col-4">
          {price}
        </span>
      </div>

      <div className="row justify-content-center">
        <p
          className="card-text"
          style={{ textAlign: "justify", textJustify: "interWord" }}
        >
          {readMore ? info : info.substring(0, 100) + "..."}
          <button
            className="btn btn-link"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Leer Menos" : "Leer Mas"}
          </button>
        </p>

        <button
          className="btn btn-outline-primary col-5 mb-3"
          onClick={() => removeBeach(id)}
        >
          Dejar de ver
        </button>
      </div>
    </div>
  );
};

export default Beach;
