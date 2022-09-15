import React from "react";
import { Box, Spacer } from "@chakra-ui/react";
import Heading from "../../../component/Heading";
import SideParagraph from "../../../component/SideParagraph";
import BlueBtn from "../../../component/BlueBtn";

const TextSection = () => {
  return (
    <>
      <Box h="264px" w="737px" mt={["1rem", "1rem", "3rem", "8rem", "11rem"]}>
        <Heading>Experience<Spacer />Exclusive <Spacer /> Cricket In Digital Art</Heading>
        <SideParagraph>Create, Explore and Collect Cricket ART NFTs<Spacer />A creative agency that lead and inspire Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</SideParagraph>
        <BlueBtn>BEGIN YOUR JOURNEY NOW</BlueBtn>
      </Box>
    </>
  );
};
export default TextSection;
