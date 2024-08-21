"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import actions from "@/lib/redux/actions";
import Image from "next/image";
import { useEffect } from "react";
import Initializing from "@/app/components/Initializing";
import HeaderWrapper from "@/app/components/Layout/Header";
import FooterWrapper from "@/app/components/Layout/Footer";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: LayoutProps) => {
  const initialized = useAppSelector((state) => state.config.initialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.config.initialize(true));
  }, []);

  if (!initialized) return <Initializing />;

  return (
    <>
      <Layout>
        <HeaderWrapper />
          <Layout>{children}</Layout>
        <FooterWrapper />
      </Layout>
    </>
  );
};

export default BaseLayout;
