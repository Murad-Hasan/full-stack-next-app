import {
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const LandingFooter = () => {
  return (
    <Box as="footer" backgroundColor="blue.300" py="20px">
      <Container>
        <SimpleGrid columns={2} spacing={10} p="40px">
          <Box>SuperApp 2022</Box>
          <Flex flexDirection="column">
            <Text>Follow us on</Text>
            <HStack spacing={4}>
              <Text>
                {" "}
                <a href="https://twitter.com/">Twitter</a>
              </Text>
              <Text>
                {" "}
                <a href="https://facebook.com/">Facebook</a>
              </Text>
              <Text>
                {" "}
                <a href="https://instagram.com/">Instagram</a>
              </Text>
            </HStack>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default LandingFooter;
