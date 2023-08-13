import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomePageComponents/HomeSectionCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className='"relative px-4 lg:px-8"'>
      <div className="relative p-5">
        <AliceCarousel
          infinite
          items={items}
          disableButtonsControls
          responsive={responsive}
        />
        <button variant="contained" className="z-100" sx={{position:'absolute', top:"15rem", right:"0rem", transform:"translateX(50%) rotate(90deg)"}} aria-label="next">
    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)"}}/>
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
