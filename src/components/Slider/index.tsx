import { Flex } from "@chakra-ui/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide } from "./Slide";

export function Slider() {
  return (
    <Flex
      h="450px"
      w={"100%"}
      maxW={1480}
      mx={"auto"}
      px={24}
      pb={10}
      align={"center"}
      justify={"center"}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          //@ts-ignore
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "12px",
          "--swiper-navigation-color": "#FFBA08",
        }}
      >
        <SwiperSlide>
          <Slide
            src="/continents/europa/europa.png"
            alt="europa"
            heading="Europa"
            text="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            src="/continents/africa/africabanner.avif"
            alt="africa"
            heading="Africa"
            text="Cultura vibrante, rica natureza."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            src="/continents/americaNorte/americaNortebanner.avif"
            alt="america do norte"
            heading="America do Norte"
            text="Grande diversidade, vasta beleza."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            src="/continents/americaSul/americaSulbanner.avif"
            alt="america do sul"
            heading="America do Sul"
            text="Cores, ritmos, paisagens deslumbrantes."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            src="/continents/asia/asiabanner.avif"
            alt="asia"
            heading="Ásia"
            text="Tradição, modernidade, maravilhas históricas."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            src="/continents/oceania/oceaniabanner.avif"
            alt="oceania"
            heading="Oceania"
            text="Ilhas paradisíacas, biodiversidade única."
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
