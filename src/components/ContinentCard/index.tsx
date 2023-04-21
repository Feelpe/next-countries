import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

import { CountryType } from "@/src/pages";

interface ContinentCardProps {
  country: CountryType;
}

export function ContinentCard({ country }: ContinentCardProps) {
  return (
    <Card w={64} overflow={"hidden"} rounded={"base"}>
      <Image src={country.banner} alt={country.name} h={"173px"} />
      <CardBody
        position={"relative"}
        border={"1px"}
        borderTop={0}
        borderColor={"highlight"}
        px={6}
        pt={"18px"}
        pb={6}
      >
        <Heading fontSize={20} fontFamily={"Barlow"} pb={3}>
          {country.name}
        </Heading>
        <Text
          fontWeight={500}
          fontSize={16}
          fontFamily={"Barlow"}
          color={"dark.info"}
        >
          {country.continentName}
        </Text>
        <Image
          src="/continents/europa/EllipseLondres.png"
          alt="Bandeira Reino Unido"
          position={"absolute"}
          right={6}
          top={"38px"}
          w={7}
          h={7}
          borderRadius={"full"}
        />
      </CardBody>
    </Card>
  );
}
