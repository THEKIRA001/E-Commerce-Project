import React from "react";
import "../HomeSectionCard.css"
const HomeSectionCard = () => {
  return (
    <div className="cardContainer">
      <div className="item">
        <img
          className="itemImage"
          src="https://rukmini.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70"
          alt=""
        />
      </div>

      <div className="itemSpace">
        <h3 className="itemHeading">NOfilter</h3>
        <p className="itemSubheading">Men Solid Pure Cotton Straight Kurta</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
