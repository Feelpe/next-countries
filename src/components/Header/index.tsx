import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const { pathname } = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      h="100px"
      maxW={1480}
      mx="auto"
      align="center"
      justifyContent="center"
      position="relative"
    >
      {pathname !== "/" && (
        <Link href={"/"}>
          <ChevronLeftIcon
            w={8}
            h={8}
            position={"absolute"}
            left={36}
            top={"34px"}
          />
        </Link>
      )}
      <Link href={"/"}>
        <Image src="/Logo.svg" alt="logo" />
      </Link>
    </Flex>
  );
}
