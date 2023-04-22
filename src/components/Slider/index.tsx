import { Flex } from "@chakra-ui/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Slide } from "../Slide";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { HomeProps } from "@/src/pages";

export function Slider({ continents }: HomeProps) {
  return (
    <Flex w={"100%"}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
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
        {continents.map((continent) => (
          <div key={continent.slug}>
            <SwiperSlide>
              <Slide continent={continent} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </Flex>
  );
}
