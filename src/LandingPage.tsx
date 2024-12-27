import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
} from '@chakra-ui/react';

const LandingPage: React.FC = () => {
  return (
    <Box
      bg="gray.50"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={4} // Add some padding to the Box
    >
      <Container maxW="container.lg" centerContent>
        <VStack spaceX={6} textAlign="center"> {/* Correctly using spacing prop */}
          <Image
            src="https://via.placeholder.com/150"
            alt="Logo"
            borderRadius="full"
            boxSize="150px"
            mb={4}
          />
          <Heading as="h1" size="2xl" color="teal.500">
            Welcome to Our Landing Page
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={4}>
            Discover our amazing features and services tailored for you.
          </Text>
          <Flex gap={4}>
            <Button colorScheme="teal" size="lg">
              Get Started
            </Button>
            <Button variant="outline" colorScheme="teal" size="lg">
              Learn More
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default LandingPage;
