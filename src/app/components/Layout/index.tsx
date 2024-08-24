"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import actions from "@/lib/redux/actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import Initializing from "@/app/components/Initializing";
import HeaderNavbar from "@/app/components/Layout/HeaderNavbar";
import FooterWrapper from "@/app/components/Layout/Footer";
import Navbar from "@/app/components/Layout/Navbar";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: LayoutProps) => {
  const initialized = useAppSelector((state) => state.config.initialized);
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    dispatch(actions.config.initialize(true));
  }, []);

  const handleClick = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  if (!initialized) return <Initializing />;

  return (
    <>
      <Layout>
        <HeaderNavbar onClick={handleClick} collapsed={collapsed} />
        <Navbar onClose={handleClick} collapsed={collapsed} />
          <Layout>{children}</Layout>
        <FooterWrapper />
      </Layout>
    </>
  );
};

export default BaseLayout;
