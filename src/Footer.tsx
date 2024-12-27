import React from "react";
import { Box, Flex, Heading, Text, VStack, Input, Button } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="maroon" color="white" p={10}>
      <Flex direction={["column", "column", "row"]} justify="space-between" wrap="wrap">
        {/* Column 1 */}
        <VStack align="start" flex="1" mb={[6, 6, 0]}>
          <Heading size="md" fontFamily="Gill Sans">
            Start Working with Logo
          </Heading>
          <Text fontFamily="Montserrat">Mon - Sat: 10:00 AM to 07:30 PM</Text>
        </VStack>

        {/* Column 2 */}
        <VStack align="start" flex="1" mb={[6, 6, 0]}>
          <Heading size="md" fontFamily="Gill Sans">
            Our Services
          </Heading>
          <Text fontFamily="Montserrat">Service 1</Text>
          <Text fontFamily="Montserrat">Service 2</Text>
          <Text fontFamily="Montserrat">Service 3</Text>
        </VStack>

        {/* Column 3 */}
        <VStack align="start" flex="1" mb={[6, 6, 0]}>
          <Heading size="md" fontFamily="Gill Sans">
            Get in Touch
          </Heading>
          <Text fontFamily="Montserrat">Email: info@example.com</Text>
          <Text fontFamily="Montserrat">Phone: +123456789</Text>
        </VStack>

        {/* Column 4 */}
        <VStack align="start" flex="1">
          <Heading size="md" fontFamily="Gill Sans">
            Newsletter
          </Heading>
          <Text fontFamily="Montserrat">Sign up and receive the latest tips via email.</Text>
          <Flex>
            <Input placeholder="Your Email" bg="whiteAlpha.900" color="black" />
            <Button colorScheme="red" ml={2}>
              Subscribe
            </Button>
          </Flex>
        </VStack>
      </Flex>
      <Text fontFamily="Montserrat" textAlign="center" mt={6}>
        &copy; 2024 Logo Name. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
