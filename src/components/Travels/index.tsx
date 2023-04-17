import { Image, Text, VStack } from "@chakra-ui/react";

interface TravelsProps {
  img: string;
  text: string;
}

export function Travels({ img, text }: TravelsProps) {
  return (
    <VStack gap={6}>
      <Image src={img} h={20} />
      <Text fontWeight={700} fontSize={24}>
        {text}
      </Text>
    </VStack>
  );
}
