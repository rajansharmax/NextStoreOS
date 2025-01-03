"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import actions from "@/lib/redux/actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import Initializing from "@/app/components/Initializing";
import FooterWrapper from "@/app/components/Layout/Footer";
import { Layout } from "antd";
import Navbar from "@/app/components/Layout/Header/Navbar";
import SideNavbar from "@/app/components/Layout/Header/SideNavbar";
import HeaderNavbar from "@/app/components/Layout/Header/HeaderNavbar";
import Breadcrumb from "@/app/components/common/Breadcrumb";
import { useBreadcrumbItems } from "@/lib/utils/common";
import HeaderTopBar from "./Header/HeaderTopBar";
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

  const breadcrumbItems = useBreadcrumbItems();

  useEffect(() => {
    // async function fetchUsers() {
    //   const response = await fetch("/api/users");

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log(data);
    //   } else {
    //     console.error("Failed to fetch users");
    //   }
    // }

    // fetchUsers();
  }, []);

  if (!initialized) return <Initializing />;

  return (
    <>
      <Layout>
        <HeaderTopBar />
        <HeaderNavbar />
        <Navbar onClick={handleClick} collapsed={collapsed} />
        <Breadcrumb items={breadcrumbItems} />
        <SideNavbar onClose={handleClick} collapsed={collapsed} />
        <Layout>{children}</Layout>
        <FooterWrapper />
      </Layout>
    </>
  );
};

export default BaseLayout;
