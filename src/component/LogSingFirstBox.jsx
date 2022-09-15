import { Box, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const LogSingFirstBox = ()=>{
    return(<><Box flex="1" bg="#143DAD" py="5rem">
    <Text
      fontFamily="Montserrat"
      fontWeight="700"
      fontSize={["37px","38px","33px","48px"]}
      lineHeight={["42.51px","42.51px","45.51px","58.51px"]}
      color="#FFFFFF"
      letterSpacing=" -0.025em"
      textAlign="center"
   
    >
      Welcome to <Spacer /> TCG Market
    </Text>
    <Text
      fontFamily="Poppins"
      fontWeight="300"
      fontSize={["12px","12px","15px","15px"]}
      lineHeight="30px"
      color="#FFFFFF"
      letterSpacing=" -0.02em"
      textAlign="center"
    >
      Login and start the journey!
    </Text>
  </Box>
    </>)
}
export default LogSingFirstBox;