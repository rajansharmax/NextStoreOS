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
import Breadcrumb from "@/app/components/Common/Breadcrumb";
import { usePathname } from "next/navigation";
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

  const pathname = usePathname();

  // Split the pathname into an array of segments
  const pathSegments = pathname.split("/").filter(Boolean);

  // Generate breadcrumb items based on the path segments
  const breadcrumbItems = pathSegments.map((segment, index) => {
    // Create the href for each breadcrumb item
    const href = "/" + pathSegments.slice(0, index + 1).join("/");

    return {
      title: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize the segment
      href,
    };
  });


  if (!initialized) return <Initializing />;

  return (
    <>
      <Layout>
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
