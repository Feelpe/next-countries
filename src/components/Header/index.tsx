import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="100px"
      maxW={1480}
      mx="auto"
      align="center"
      justifyContent="center"
    >
      <Image src="/Logo.svg" />
    </Flex>
  );
}
