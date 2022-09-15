import { Text } from "@chakra-ui/react";
import React from "react";
const SideParagraph = (props) => {
  return (
    <>
      <Text
        fontFamily="Poppins"
        fontWeight="300"
        fontSize={["14px", "16px", "14px", "18px", "20px"]}
        lineHeight={["24px", "24px", "23px", "26px", "30px"]}
        letterSpacing="-2%"
        w={["100%", "100%", "79%", "79%", "79%"]}
        mt="1rem"
      >
        {props.children}
      </Text>
    </>
  );
};
export default SideParagraph;
