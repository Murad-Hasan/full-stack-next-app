import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

const LandingBody = () => {
  return (
    <Container>
      <SimpleGrid columns={2} spacing={10} p="110px 24px">
        <Box>
          <Box
            background="gray.300"
            borderRadius="16px"
            width="100% "
            height="225px"
          ></Box>
        </Box>
        <Flex flexDirection="column" justifyContent="center">
          <Text mb="8px">Including the market standard Technology</Text>
          <UnorderedList>
            <ListItem>Next.js</ListItem>
            <ListItem>ChakraUI</ListItem>
            <ListItem>PostgreSQL</ListItem>
            <ListItem>prisma</ListItem>
          </UnorderedList>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default LandingBody;
