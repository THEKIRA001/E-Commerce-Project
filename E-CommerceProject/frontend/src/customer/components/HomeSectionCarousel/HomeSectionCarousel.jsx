import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import "./HomeSectionCard.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="section">
      <div className="sectionCarousel">
        <AliceCarousel
          infinite
          items={items}
          disableButtonsControls
          responsive={responsive}
        />
        <button variant="contained" className="z-50" sx={{position:'absolute', top:"8rem", right:"0rem", transform:"translateX(50%)"}} aria-label="next">
    <KeyboardArrowLeftIcon/>
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
