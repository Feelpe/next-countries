import { Center, Image, Text, VStack } from "@chakra-ui/react";

import { ContinentType } from "@/src/pages";

interface SlideProps {
  continent: ContinentType;
}

export function Slide({ continent }: SlideProps) {
  return (
    <Center h={"450px"} position={"relative"} overflow={"hidden"}>
      <Image
        src={continent.slideImg}
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
  );
}
