import { Slider, SliderItem } from "@/app/components/common/Slider";
import data from "@/assets/data/Home/PhotosSliderData";

import { PhotosSliderWrapper } from "./styled";
import Image from "next/image";

const PhotosSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <PhotosSliderWrapper>
      <Slider {...settings}>
        {data?.map((thumb, i) => (
          <SliderItem key={i}>
            <div className="character-thumb">
              <Image src={thumb} alt="bithu nft character" />
            </div>
          </SliderItem>
        ))}
      </Slider>
    </PhotosSliderWrapper>
  );
};

export default PhotosSlider;
