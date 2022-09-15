import {Box, Button, Flex, Drawer, DrawerContent, Image, Text, useMediaQuery, useDisclosure, Link,} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

  const Header = () => {
  const [isMobileDevice] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const router = useRouter();

  return (
    <>
      {isMobileDevice ? (
        <Flex
          justifyContent="space-between"
          w="100%"
          px="3rem"
          py="1rem"
          alignItems="center"
        >
          <Box w="50%">
            <Image alt="logo" src="/assets/logo.png" w="150px" onClick={(e) => { router.push('/') }}/>
          </Box>

          <Flex
            fontSize={["12px", "12px", "9px", "13px", "15px"]}
            style={headerText}
          >
            <Text cursor="pointer" onClick={(e) => { router.push('/')}}>ABOUT US</Text>
            <Text cursor="pointer" onClick={(e) => { router.push('/')}}>MARKETPLACE</Text>
            <Text cursor="pointer" onClick={(e) => { router.push('/')}}>COMMUNITY</Text>
            <Text cursor="pointer" onClick={(e) => { router.push('/')}}>SIGN UP</Text>

            <Button borderRadius="none" style={LoginBtn}  onClick={(e) => {router.push('/')}}>LOGIN</Button>
          </Flex>
        </Flex>
      ) :
      
      (
        <Flex
          justifyContent="flex-start"
          w="100%"
          px="1rem"
          bg="#fff"
          py="1rem"
          alignItems="center"
        >
          <Button ref={btnRef} bg="#FFFFFF" onClick={onOpen}>
            <Image alt="menu" src="/assets/Menuheader.png" />
          </Button>
          
          <Drawer style={Drawerbg}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerContent w="50% !important">
              <Box
                fontSize={["12px", "12px", "9px", "12px"]}
                style={headerText}
                pt="2rem"
                h="100%"
                m="auto"
              >
                <Text style={DrawerText} cursor="pointer"><Link href="/">ABOUT US</Link></Text>
                <Text style={DrawerText} cursor="pointer"><Link href="/">MARKETPLACE</Link></Text>
                <Text style={DrawerText} cursor="pointer"><Link href="/">COMMUNITY</Link></Text>
                <Text style={DrawerText} cursor="pointer"><Link href="/">Sign up</Link></Text>
                <Button borderRadius="none" style={LoginBtn}>LOGIN</Button>
              </Box>
            </DrawerContent>
          </Drawer>
          <Image alt="logo" src="/assets/logo.png" pl="1rem" boxSize="50%" />
        </Flex>
      )}
    </>
  );
};

const Drawerbg ={
  backgroundColor: "#ffffff",
}

const headerText = {
  fontWeight: "900",
  color: "#001C52",
  justifyContent: "space-between",
  width: "50%",
  alignItems: "center",
};

const DrawerText = {
  width: "100%",
  height: "10%",
  textAlign: "center",
  color: "#143DAD",
};

const LoginBtn = {
  width: "134px",
  height: "59px",
  backgroundColor: "#143DAD",
  color: "#FFFFFF",
  fontSize: "18px",
  fontWeight: "600",
};

export default Header;
