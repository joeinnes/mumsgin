import { Box, Heading, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box
      backgroundImage={`url("https://source.unsplash.com/collection/41740221&fit=clip&q=10&usm=20&auto=compress&cs=tinysrgb")`}
      backgroundSize="cover"
      backgroundAttachment="fixed"
      flexGrow={1}
      pos="relative"
    >
      <Box
        maxW={["100%", "100%", "35ch"]}
        bg="white"
        p={4}
        pos="absolute"
        top="50%"
        right={0}
        mr={["auto", "auto", "10%"]}
        ml={["auto", "auto", 0]}
        transform="translateY(-50%)"
      >
        <Box p={4} borderColor="black" borderWidth={4}>
          <Heading textDecoration="underline" mb={4}>
            The Concept
          </Heading>
          <Text>
            For your 60th birthday, once every 60 days, you'll receive a bottle
            of gin, plus tonic (or other mixers, snacks, and garnishes)—and of
            course we'll meet up to drink together, online or in person!
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
