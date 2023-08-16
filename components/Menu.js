import { Container, Flex, Link } from "@chakra-ui/react";

export default function Menu({ items = [], preview = false }) {
  return (
    <Container maxW="container.xl" textAlign="center">
      <Flex
        spacing={12}
        minH={24}
        padding={[6, 6, 0]}
        alignItems="center"
        justifyContent="space-around"
        fontSize="larger"
        direction={["column", "column", "row"]}
      >
        {items.map((item) => (
          <>
            {(new Date(item.display_after) < new Date() ||
              preview === true) && (
              <Link
                href={`#${item.id}`}
                textDecoration="underline dotted"
                paddingTop={[1, 1, 0]}
                paddingBottom={[1, 1, 0]}
                key={item.name}
              >
                {item.name}
              </Link>
            )}
          </>
        ))}
      </Flex>
    </Container>
  );
}
