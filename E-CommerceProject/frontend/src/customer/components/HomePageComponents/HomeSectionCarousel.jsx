import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomePageComponents/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarousel = () => {
  const [activeIndex,setActiveIndex]=useState(5);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item);

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((Item) => <HomeSectionCard />);
  return (
    <div className="px-6 lg:px-8 border border-purple-300 rounded-md">
      <div className="relative p-4">
      {activeIndex > 5 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor:"white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)",color:"black"}} />
        </Button>}
      <AliceCarousel
          infinite
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
    {activeIndex !== items.length-5 && <Button
        variant="contained"
        className="z-50 bg-white"
        onClick={slideNext}
        sx={{
          position: "absolute",
          top: "8rem",
          right: "0rem",
          transform: "translateX(50%) rotate(90deg)",
          bgcolor:"white",
        }}
        aria-label="next"
      >
        <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}} />
      </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
