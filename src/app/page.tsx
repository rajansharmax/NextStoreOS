'use client';
import Image from "next/image";
import Banner from "./components/common/Banner";
import FlashSlider from "./components/common/FlashSlider";
import PhotosSlider from "./components/common/PhotosSlider";
import Partner from "./components/common/Partner";
import WhySection from "./components/common/WhySection";

const Home = () => {
  return (
    <>
      <Banner />
      <FlashSlider />
      <PhotosSlider />
      <Partner />
      <WhySection />
    </>
  );
};

export default Home;
