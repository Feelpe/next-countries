import { Divider, Image, Text, VStack } from "@chakra-ui/react";

import { Slider } from "../components/Slider";
import { Travels } from "../components/Travels";

export interface CountryType {
  slug: string;
  banner: string;
  name: string;
  continentName: string;
  flag: string;
}

export interface ContinentType {
  slug: string;
  title: string;
  subtitle: string;
  slideImg: string;
  banner: string;
  countries: CountryType[];
}

export const continents: ContinentType[] = [
  {
    slug: "europa",
    title: "Europa",
    subtitle: "O continente mais antigo.",
    slideImg: "/continents/europa/slideImg.png",
    banner: "/continents/europa/banner.png",
    countries: [
      {
        slug: "londres",
        banner: "/continents/europa/londres/cardLondres.png",
        name: "Londres",
        continentName: "Reino Unido",
        flag: "/continents/europa/londres/EllipseLondres.png",
      },
    ],
  },
  {
    slug: "europa",
    title: "Europa",
    subtitle: "O continente mais antigo.",
    slideImg: "/continents/europa/slideImg.png",
    banner: "/continents/europa/banner.png",
    countries: [
      {
        slug: "londres",
        banner: "/continents/europa/londres/cardLondres.png",
        name: "Londres",
        continentName: "Reino Unido",
        flag: "/continents/europa/londres/EllipseLondres.png",
      },
    ],
  },
];

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
