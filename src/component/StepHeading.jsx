import { Text } from "@chakra-ui/react";
import React from "react";

const StepHeading = (props) =>{
    return(
        <>
        <Text   
          fontFamily="Montserrat"
          fontWeight="700"
          fontSize={["22px", "22px", "32px", "32px"]}
          color="#FFC700"
          letterSpacing="-0.025em">{props.children}</Text>
        </>
    )
}
export default StepHeading;