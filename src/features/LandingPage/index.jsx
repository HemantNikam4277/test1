import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import TextSection from "./component/TextSection";
import HeroImgSection from "./component/HeroImgSection";
import Header from "../Header";
import Heading from "../../component/Heading";
import SideParagraph from "../../component/SideParagraph";


const LandingPage = () => {
  return (
    <>
      <Box display={["block", "block", "none", "none"]}>
        <Header />
      </Box>

      <Box
        bg="#fff"
        style={{
          backgroundImage: `url(/assets/banner.jpg)`,
          height: "100%",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box display={["none", "none", "block", "block"]} w="100%">
          <Header />
        </Box>
        <Box>
          <Flex
            w="100%"
            px={["1.5rem", "1.5rem", "3rem", "3rem"]}
            pb={["0rem", "0rem", "7rem", "7rem"]}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
            textAlign={["center", "center", "left", "left"]}
          >
            <Box flex="1">
              <TextSection />
            </Box>

            <Box flex="1">
              <HeroImgSection />
            </Box>

          </Flex>
        </Box>
        <Box>
          <Flex
            flexDirection="column"
            textAlign="center"
            top={["1rem", "1rem", "1rem", "3rem"]}
            alignItems="center"
          >
            <Heading>Welcome to TCG</Heading>

            <SideParagraph>
              A creative agency that lead and inspire Amet minim mollit non
              deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit m
            </SideParagraph>

          </Flex>
        </Box>
      </Box>
    </>
  );
};
export default LandingPage;
