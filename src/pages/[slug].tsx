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
import { GetStaticPropsContext } from "next";

import { createClient } from "../service/prismicio";

import { ContinentType } from ".";
import { ContinentCard } from "../components/ContinentCard";

type PageParams = { slug: string };

export default function Continent({ continent }: ContinentType) {
  return (
    <>
      <Flex w={"100%"} position={"relative"}>
        <Image src={continent.banner} alt={continent.title} w={"100%"} />
        <Heading
          fontSize={48}
          color={"light.text"}
          position={"absolute"}
          left={36}
          bottom={14}
        >
          {continent.title}
        </Heading>
      </Flex>
      <VStack w={"100%"} px={36} py={20} alignItems={"flex-start"}>
        <HStack gap={16} pb={20}>
          <Text fontSize={24}>{continent.description}</Text>
          <HStack gap={10}>
            <VStack>
              <Heading color={"highlight"} fontSize={48}>
                {continent.countries}
              </Heading>
              <Heading fontSize={24}>Países</Heading>
            </VStack>
            <VStack>
              <Heading color={"highlight"} fontSize={48}>
                {continent.languages}
              </Heading>
              <Heading fontSize={24}>Línguas</Heading>
            </VStack>
            <VStack>
              <Heading color={"highlight"} fontSize={48}>
                {continent.cities100}
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
          {continent.cities.map((city) => (
            <WrapItem key={city.city}>
              <ContinentCard city={city} />
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
  previewData,
}: GetStaticPropsContext<PageParams>) => {
  const client = createClient({ previewData });

  if (!params) {
    return { notFound: true };
  }

  const response = await client.getByUID("continent", String(params.slug));

  // console.log(JSON.stringify(response, null, 2));

  const cities = response.data.cities.map((city) => {
    return {
      banner: city.banner.url,
      city: city.city,
      country: city.country,
      flag: city.flag.url,
    };
  });

  const continent = {
    slug: response.slugs[0],
    title: response.data.title,
    subtitle: response.data.subtitle,
    description: response.data.description,
    countries: response.data.countries,
    languages: response.data.languages,
    cities100: response.data.cities100,
    slide: response.data.slide.url,
    banner: response.data.banner.url,
    cities: cities,
  };

  return {
    props: { continent },
  };
};
