import { Text } from "@chakra-ui/react";
import React from "react";
const Heading = (props) =>{
    return(<><Text 
        fontFamily="Montserrat"
        fontWeight="700"
        fontSize={["29px", "32px", "36px", "50px", "72px"]}
        lineHeight={["30.77px", "42.77px", "38px", "55px", "81px"]}
        letterSpacing="-2.5%"
        color="rgba(0, 28, 82, 1)">
{props.children}
    </Text>
    </>)
}
export default Heading;