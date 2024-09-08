'use client';
import Image from "next/image";
import Banner from "./components/common/Banner";
import FlashSlider from "./components/common/FlashSlider";
import PhotosSlider from "./components/common/PhotosSlider";
import Partner from "./components/common/Partner";
import WhySection from "./components/common/WhySection";
import Layout from "./components/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <FlashSlider />
        <PhotosSlider />
        <Partner />
        <WhySection />
      </Layout>
    </>
  );
};

export default Home;
