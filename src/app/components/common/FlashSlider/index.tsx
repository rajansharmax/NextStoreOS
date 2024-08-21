import Image from "next/image";
import { SliderSection } from "./styled";
import FlashSliderData from "@/assets/data/Home/FlashSlider";
import { SliderItemWrapper, SliderWrapper } from "../Slider/styled";
const FlashSlider = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    centerMode: true,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <SliderSection>
      <SliderWrapper {...sliderSettings}>
        {FlashSliderData.map((item: any, index: number) => (
          <SliderItemWrapper key={index}>
              <Image src={item.icon} alt="icon" />
              {item.text}
          </SliderItemWrapper>
        ))}
      </SliderWrapper>
    </SliderSection>
  );
};

export default FlashSlider;
