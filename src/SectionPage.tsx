import React from "react";
import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Skeleton,
  HStack,
} from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import { SkeletonCircle, SkeletonText } from "./components/ui/skeleton";

const SectionPage = () => {
  return (
    <>
      {/* <Box gap="6" maxW="xs">
        <HStack width="full">
          <SkeletonCircle size="10" />
          <SkeletonText noOfLines={2} />
        </HStack>
          <Skeleton height="200px" />
      </Box> */}
      
      {/* Section 1 */}
      <Box bg="maroon" color="white" p={10}>
        <Flex
          direction={["column", "column", "row"]}
          align="center"
          justify="center"
        >
          <Image
            src="https://via.placeholder.com/300"
            alt="Sample Image"
            borderRadius="lg"
          />
          <VStack align="start" spaceX={4} ml={[0, 0, 10]} mt={[6, 6, 0]}>
            <Heading fontFamily="Gill Sans" size="xl">
              Welcome to Our Platform
            </Heading>
            <Text fontFamily="Montserrat" fontSize="lg">
              Explore opportunities and join us today!
            </Text>
            <Flex mt={4}>
              <Button colorScheme="red" mr={4}>
                Apply Now
              </Button>
              <Button variant="outline" colorScheme="whiteAlpha">
                Login
              </Button>
            </Flex>
          </VStack>
        </Flex>
      </Box>

      {/* Section 2 */}
      <Box bg="white" color="black" p={10}>
        <Text textAlign="center" fontFamily="Montserrat">
          Sample Text for Section 2
        </Text>
      </Box>

      {/* Section 3 */}
      <Box bg="red.100" color="black" p={10}>
        <Text textAlign="center" fontFamily="Montserrat">
          Sample Text for Section 3
        </Text>
      </Box>

      {/* Section 4 */}
      <Box bg="white" color="black" p={10}>
        <Heading fontFamily="Gill Sans" textAlign="center" mb={6}>
          News and Updates
        </Heading>
        <Flex
          direction={["column", "column", "row"]}
          align="start"
          justify="center"
        >
          <VStack spaceX={4} align="start" flex="1">
            <Heading size="md" fontFamily="Gill Sans">
              Core
            </Heading>
            <Text fontFamily="Montserrat">
              Our core values drive us forward.
            </Text>
            <Heading size="md" fontFamily="Gill Sans">
              Mission
            </Heading>
            <Text fontFamily="Montserrat">
              To make the world a better place.
            </Text>
            <Heading size="md" fontFamily="Gill Sans">
              Vision
            </Heading>
            <Text fontFamily="Montserrat">
              Innovate and inspire future generations.
            </Text>
          </VStack>
          <Box flex="1" ml={[0, 0, 10]} mt={[6, 6, 0]}>
            <video width="100%" controls>
              <source src="sample-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Flex>
      </Box>

      {/* Section 5 */}
      <Box
        bgImage="url('background.jpg')"
        bgSize="cover"
        bgPos="center"
        h="400px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box bg="whiteAlpha.800" p={8} borderRadius="md" textAlign="center">
          <Heading fontFamily="Gill Sans">Login Portal</Heading>
          <input
            placeholder="Email"
            style={{
              marginTop: "8px",
              padding: "8px",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid gray",
            }}
          />
          <input
            placeholder="Password"
            type="password"
            style={{
              marginTop: "8px",
              padding: "8px",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid gray",
            }}
          />
          <button
            style={{
              marginTop: "8px",
              padding: "8px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Box>
      </Box>
    </>
  );
};

export default SectionPage;
