import { Center, Image, Text, VStack } from "@chakra-ui/react";

interface SlideProps {
  src: string;
  alt: string;
  heading: string;
  text: string;
}

export function Slide({ src, alt, heading, text }: SlideProps) {
  return (
    <Center h={"450px"} position={"relative"} overflow={"hidden"}>
      <Image
        src={src}
        alt={alt}
        mx={"auto"}
        flexShrink={0}
        minW={"100%"}
        minH={"100%"}
      />
      <VStack position={"absolute"} right={50} left={50}>
        <Text fontWeight={700} fontSize={48} color={"light.text"}>
          {heading}
        </Text>
        <Text fontWeight={700} fontSize={24} color={"light.text"}>
          {text}
        </Text>
      </VStack>
    </Center>
  );
}
