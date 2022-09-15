import { Button } from "@chakra-ui/react";
import React from "react";
  
const BlueBtn = (props) =>{
    return(
        <>
        <Button
          bg="#143DAD !important"
          color="#ffff"
          mt="2rem"
          fontSize="18px"
          fontWeight="600"
          borderRadius="none"
          w="277px"
          h="59px"
          px="1.5rem"
        > {props.children}</Button>
        </>
    )
}
 export default BlueBtn;