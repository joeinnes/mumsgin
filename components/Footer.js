import Image from "next/image";
import { Box, Container, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container maxW="container.xl" py={8}>
      <Flex
        alignItems={"center"}
        fontSize="larger"
        flexDirection={["column", "column", "row"]}
      >
        With love from{" "}
        <Box
          borderRadius="full"
          overflow="hidden"
          mx={2}
          h={16}
          w={16}
          pos="relative"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/assets/49edc899-31af-4f44-9c57-0c0ecaee53d9`}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        Sandi,{" "}
        <Box
          borderRadius="full"
          overflow="hidden"
          mx={2}
          h={16}
          w={16}
          pos="relative"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/assets/56373f19-2b09-4a59-848b-7faaaaf3f9af`}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        Laura, and{" "}
        <Box
          borderRadius="full"
          overflow="hidden"
          mx={2}
          h={16}
          w={16}
          pos="relative"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/assets/30d8cf1d-187c-494f-90bc-5c76c1e498d1`}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        Joe
      </Flex>
    </Container>
  );
}
