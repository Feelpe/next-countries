import { Divider, Image, Text, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { Slider } from "../components/Slider";
import { Travels } from "../components/Travels";

import { createClient } from "../service/prismicio";

export interface CitiesType {
  banner: string;
  city: string;
  country: string;
  flag: string;
}

export interface ContinentType {
  continent: {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    countries: number;
    languages: number;
    cities100: number;
    slide: string;
    banner: string;
    cities: CitiesType[];
  };
}

export interface Continent {
  slug: string;
  title: string;
  subtitle: string;
  slide: string;
}

export interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
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
        <Slider continents={continents} />
      </VStack>
    </VStack>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const response = await client.getAllByType("continent");

  const continents = response.map((continent) => {
    return {
      slug: continent.slugs[0],
      title: continent.data.title,
      subtitle: continent.data.subtitle,
      slide: continent.data.slide.url,
    };
  });

  return {
    props: {
      continents,
    },
  };
};
