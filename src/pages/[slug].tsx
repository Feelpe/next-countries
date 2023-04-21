import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  Tooltip,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ContinentCard } from "../components/ContinentCard";

import { ContinentType } from ".";

export default function Continent(continent: ContinentType) {
  return (
    <>
      <Flex w={"100%"} position={"relative"}>
        <Image
          src="/continents/europa/ContinentBanner.png"
          alt="ContinentBanner"
          w={"100%"}
        />
        <Heading
          fontSize={48}
          color={"light.text"}
          position={"absolute"}
          left={36}
          bottom={14}
        >
          Europa
        </Heading>
      </Flex>
      <VStack w={"100%"} px={36} py={20} alignItems={"flex-start"}>
        <HStack gap={16} pb={20}>
          <Text fontSize={24}>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <HStack gap={10}>
            <VStack>
              <Heading color={"highlight"} fontSize={48}>
                50
              </Heading>
              <Heading fontSize={24}>Países</Heading>
            </VStack>
            <VStack>
              <Heading color={"highlight"} fontSize={48}>
                60
              </Heading>
              <Heading fontSize={24}>Línguas</Heading>
            </VStack>
            <VStack>
              <Heading color={"highlight"} fontSize={48}>
                27
              </Heading>
              <Center gap={2}>
                <Heading fontSize={24}>Cidades+100</Heading>
                <Tooltip label="As Cidades da Europa que estão entre as 100+ do mundo">
                  <InfoOutlineIcon fontSize={16} color={"dark.info"} />
                </Tooltip>
              </Center>
            </VStack>
          </HStack>
        </HStack>
        <Text fontWeight={500} fontSize={36} pb={10}>
          Cidades +100
        </Text>
        <Wrap spacing={10}>
          {continent.countries.map((country) => (
            <WrapItem key={country.slug}>
              <ContinentCard country={country} />
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </>
  );
}
