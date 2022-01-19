import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex
      w="100%"
      background="linear-gradient(93.73deg, #FEAC 2.17%, #C77900 47.86%, #4BC0C8 98.58% )"
    >
      <Container py="64px" textAlign="center">
        <Heading>
          Increase your Productivity
          <br />
          Make your app in minutes
          <Text mt="16px" fontSize="30px" color="gray.500">
            Your Full stack React app
          </Text>
        </Heading>
      </Container>
    </Flex>
  );
};

export default Hero;
