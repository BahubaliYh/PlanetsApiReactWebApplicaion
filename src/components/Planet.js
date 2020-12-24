import React from "react";
import Col from "react-bootstrap/Col";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const Planet = ({ id, isFavourite, name, handleFavorite }) => {
  return (
    <Col sm={12} md={4}>
      <div className="card mb-5 p-2">
        <h2>{name} </h2>
        {isFavourite ? (
          <BsHeartFill
            className="ml-auto my-auto"
            size={32}
            style={{ fill: "red" }}
            onClick={() => handleFavorite(id)}
          />
        ) : (
          <BsHeart
            className="ml-auto my-auto"
            size={32}
            onClick={() => handleFavorite(id)}
          />
        )}
      </div>
    </Col>
  );
};

export default Planet;
