import { Box } from "@chakra-ui/react";
import React from "react";
const WhiteBoxMarketPlace = (props) =>{
    return(<>
    <Box
        bg="#FFFFFF"
        w="300px"
        py="1.5rem"
        px="1rem"
        borderRadius="10px"
        mt="3rem"
        boxShadow="0px 1px 2px -2px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.12), 0px 5px 12px 4px rgba(0, 0, 0, 0.09)"
      >{props.children}</Box>
    </>)
}
 export default WhiteBoxMarketPlace;