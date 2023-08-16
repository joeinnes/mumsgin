import NavBar from "./NavBar";
import Footer from "./Footer";

import { Flex } from "@chakra-ui/react";

export default function Layout({ children, hero = null }) {
  const Hero = hero;
  return (
    <Flex direction="column" flexGrow={1} minH="100vh">
      {hero && (
        <>
          <Flex minH="100vh" direction="column">
            <NavBar />
            <Hero flexGrow={1} />
          </Flex>
          {children}
          <Footer />
        </>
      )}
      {!hero && (
        <>
          <NavBar />
          {children}
          <Footer />
        </>
      )}
    </Flex>
  );
}
