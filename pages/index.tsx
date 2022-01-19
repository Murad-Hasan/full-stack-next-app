import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Hero from "../components/molecules/Hero/Hero";
import { MenuItem } from "../components/molecules/MenuItems/MenuItem";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Super App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex w="100%" flexDirection="row" alignContent="center" p="6px 0">
          <Text
            fontSize="36px"
            fontWeight="bold"
            lineHeight="42px"
            color="#1F79BA"
            flexGrow={1}
          >
            Super App
          </Text>
          <HStack spacing="20px" alignContent="center">
            <MenuItem>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/product">
                <a>Product</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </MenuItem>
          </HStack>
          <Flex marginLeft="82px">
            <Button variant="solid" colorScheme="blue">
              Get Started
            </Button>
          </Flex>
        </Flex>
        <Flex>
          <Hero />
        </Flex>
      </main>
    </div>
  );
};

export default Home;