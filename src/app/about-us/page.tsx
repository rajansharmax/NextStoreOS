'use client';
import { useEffect } from "react";
import PageHeader from "../components/common/PageHeader";
import { useAppSelector } from "@/lib/hook";

const AboutUs = () => {

  const config = useAppSelector((state) => state.config);

  useEffect(()=>{
    console.log(config,'useeffect');
  });

  return <>
    <PageHeader />
  </>
}

export default AboutUs;