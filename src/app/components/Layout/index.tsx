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

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const initialized = useAppSelector((state) => state.config.initialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.config.initialize(true));
  });

  if (!initialized) return <Initializing />;

  const layoutStyle = {
    background: 'transparent',
  };

  return (
    <>
      <Layout style={layoutStyle}>
        <HeaderWrapper />
        <div className="layout">{children}</div>
        <FooterWrapper />
      </Layout>
    </>
  );
};

export default BaseLayout;
