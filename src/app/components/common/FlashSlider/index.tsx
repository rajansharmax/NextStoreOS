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
    <SliderSection className="coin_info_slider">
      <SliderWrapper className="slick__slider" {...sliderSettings}>
        {FlashSliderData?.map((item, idx) => (
          <SliderItemWrapper className="slick__slider__item" key={idx}>
            <div className="slide_item">
              <Image src={item.icon} alt="icon" />
              {item.text}
            </div>
          </SliderItemWrapper>
        ))}
      </SliderWrapper>
    </SliderSection>
  );
};

export default FlashSlider;
