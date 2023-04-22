import { Center, Image, Text, VStack } from "@chakra-ui/react";

import { Continent } from "@/src/pages";
import Link from "next/link";

interface SlideProps {
  continent: Continent;
}

export function Slide({ continent }: SlideProps) {
  return (
    <Link href={`/${continent.slug}`} key={continent.slug}>
      <Center h={"450px"} position={"relative"} overflow={"hidden"}>
        <Image
          src={continent.slide}
          alt={continent.title}
          flexShrink={0}
          minW={"100%"}
          minH={"100%"}
        />
        <VStack position={"absolute"} right={50} left={50}>
          <Text fontWeight={700} fontSize={48} color={"light.text"}>
            {continent.title}
          </Text>
          <Text fontWeight={700} fontSize={24} color={"light.text"}>
            {continent.subtitle}
          </Text>
        </VStack>
      </Center>
    </Link>
  );
}
