import React from "react";
import { Box, Flex, HStack, Link, Image, Input, Spacer, Text, Icon } from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg="maroon" color="white" px={8} py={4}>
      <Flex align="center">
        <HStack spaceX={4}>
          <Image src="/logo.png" alt="Logo" boxSize="40px" />
          <Text fontFamily="Gill Sans" fontSize="lg" fontWeight="bold">
            Logo Name
          </Text>
        </HStack>
        <Spacer />
        <HStack spaceX={8}>
          <Link href="#about" fontFamily="Montserrat">
            About Us
          </Link>
          <Link href="#demographics" fontFamily="Montserrat">
            Demographics
          </Link>
          <Link href="#news-updates" fontFamily="Montserrat">
            News & Updates
          </Link>
          <Flex align="center">
            <Input placeholder="Search" size="sm" bg="whiteAlpha.900" color="black" mr={2} />
            <Image src="facebook.png" alt="Facebook" boxSize="20px" mx={1} />
            <Icon as={FaFacebook} boxSize="20px" mx={1} />
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
