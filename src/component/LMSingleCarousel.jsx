
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image } from '@chakra-ui/react';

class LMSingleCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      duration: 1000,

    };
    const renderSlides = () =>
        <>
          <Box>
            <Image
                src="/assets/Indian-Cricketer.png"
                objectFit="contain"
                alt="cricket"
                m="auto"
                w="613px"
                h="833px"
              />
          </Box>
        </>

    return (
        <Slider {...settings}>
          {renderSlides()}
        </Slider>
    );
  }
}

export default LMSingleCarousel;
