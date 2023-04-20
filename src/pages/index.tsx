import { Divider, Image, Text, VStack } from "@chakra-ui/react";

import { Slider } from "../components/Slider";
import { Travels } from "../components/Travels";

export default function Home() {
  return (
    <VStack>
      <Image src="/Banner.svg" w="100%" alt="banner" />
      <Travels />
      <Divider
        w={20}
        borderColor={"dark.text"}
        borderWidth={2}
        opacity={"none"}
      />
      <VStack w="100%" mx="auto" px={24} pb={10}>
        <VStack paddingY={12} fontWeight={500} fontSize={36}>
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </VStack>
        <Slider />
      </VStack>
    </VStack>
  );
}
