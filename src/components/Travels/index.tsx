import { HStack } from "@chakra-ui/react";
import { TravelTypes } from "./TravelsTypes";

export function Travels() {
  return (
    <HStack
      w="100%"
      mx="auto"
      align="center"
      justifyContent="space-between"
      paddingY={20}
      paddingX={36}
    >
      <TravelTypes img="/icons/cocktail.png" text="vida noturna" />
      <TravelTypes img="/icons/surf.png" text="praia" />
      <TravelTypes img="/icons/building.png" text="moderno" />
      <TravelTypes img="/icons/museum.png" text="clássico" />
      <TravelTypes img="/icons/earth.png" text="e mais..." />
    </HStack>
  );
}
