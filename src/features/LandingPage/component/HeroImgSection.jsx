import React from "react";
import { Box, Image } from "@chakra-ui/react";

import LMSingleCarousel from "../../../component/LMSingleCarousel";

const HeroImgSection = () => {
  return (
    <>
      <Box pb="5rem" display="grid" placeItems="center">
        
        <Image src="/assets/frame-cricketer.png" h="100%" mt="95px" alt="frame-cricketer" />

        <Box w={["100%", "100%", "30%", "35%", "35%"]} position="absolute" mt="3rem">
          <LMSingleCarousel />
        </Box>
        
      </Box>
    </>
  );
};
export default HeroImgSection;
