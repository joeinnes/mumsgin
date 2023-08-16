import Link from "next/link";

import {
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Container maxW="container.xl" py={8}>
      <Flex
        alignItems={["left", "left", "center"]}
        fontSize="larger"
        flexDirection={["column", "column", "row"]}
      >
        <Link href="/">
          <Heading fontSize={["5xl", "5xl", "6xl"]} cursor="pointer">
            A Year Of Gin
          </Heading>
        </Link>
        <Spacer />
        <Link href="/about">
          <ChakraLink mr={8}>About Gin</ChakraLink>
        </Link>
        <Link href="/recipes">
          <ChakraLink>Cocktail Recipes</ChakraLink>
        </Link>
      </Flex>
    </Container>
  );
}
