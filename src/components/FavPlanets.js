import React from "react";
import Col from "react-bootstrap/Col";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const FavPlanets = (favorite) => {
  return (
    <Col sm={12} md={4}>
      <div className="card mb-5 p-2">
        <h2> {favorite} </h2>
        <BsHeartFill
          className="ml-auto my-auto"
          size={32}
          style={{ fill: "red" }}
        />
      </div>
    </Col>
  );
};

export default FavPlanets;
