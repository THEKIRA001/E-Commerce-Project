import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    const items = MainCarouselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.Image} alt=""/>)

    return(
        <AliceCarousel
        infinite
        items={items}
        autoPlay
        autoPlayInterval={1400}
        disableButtonsControls
    />
    )
}

export default MainCarousel
