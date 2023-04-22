import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

import { CitiesType } from "@/src/pages";

interface ContinentCardProps {
  city: CitiesType;
}

export function ContinentCard({ city }: ContinentCardProps) {
  return (
    <Card w={64} overflow={"hidden"} rounded={"base"}>
      <Image src={city.banner} alt={city.city} h={"173px"} />
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
          {city.city}
        </Heading>
        <Text
          fontWeight={500}
          fontSize={16}
          fontFamily={"Barlow"}
          color={"dark.info"}
        >
          {city.country}
        </Text>
        <Image
          src={city.flag}
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
