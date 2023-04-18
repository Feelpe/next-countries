import { Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Travels } from "../components/Travels";

export default function Home() {
  return (
    <VStack>
      <Header />
      <Image src="/Banner.svg" w="100%" alt="banner" />
      <HStack
        w="100%"
        maxW={1480}
        mx="auto"
        align="center"
        justifyContent="center"
        gap={32}
        paddingY={20}
        paddingX={36}
      >
        <Travels img="/icons/cocktail.png" text="vida noturna" />
        <Travels img="/icons/surf.png" text="praia" />
        <Travels img="/icons/building.png" text="moderno" />
        <Travels img="/icons/museum.png" text="clássico" />
        <Travels img="/icons/earth.png" text="e mais..." />
      </HStack>
      <Divider w={20} />
      <VStack w="100%" maxW={1480} mx="auto" mb={10}>
        <VStack paddingY={12} fontWeight={500} fontSize={36}>
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </VStack>
        <Slider />
      </VStack>
    </VStack>
  );
}
