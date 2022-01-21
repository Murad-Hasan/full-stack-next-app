import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { signIn } from "next-auth/react";
import { MenuItem } from "../../molecules/MenuItems/MenuItem";
const TopBar = () => {
  return (
    <>
      <Flex
        w="100%"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        p="8px 16px"
      >
        <Flex
          w={["100%", "100%", "100%", "90ch"]}
          flexDirection="row"
          alignItems="center"
          p="8px 16px"
        >
          <Text
            fontSize={{ base: "20px", md: "30px", lg: "36px" }}
            fontWeight="bold"
            lineHeight="42px"
            color="#1F79BA"
            flexGrow={1}
          >
            Super App
          </Text>
          <HStack spacing="20px" alignContent="center">
            <MenuItem text="Blog" href="/blog" />
            <MenuItem text="Product" href="/product" />
            <MenuItem text="Pricing" href="/pricing" />
          </HStack>
          <Flex
            marginLeft={{
              base: "8px",
              md: "24px",
              lg: "24px",
              xl: "30px",
            }}
          >
            <Button variant="solid" colorScheme="blue" onClick={() => signIn()}>
              Get Started
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default TopBar;
