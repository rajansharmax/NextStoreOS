'use client';
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import actions from "@/lib/redux/actions";
import Image from "next/image";
import { useEffect } from "react";
import Initializing from "@/app/components/Initializing";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import GlobalStyles from "@/assets/GlobalStyles";


const Layout = ({ children }: { children: React.ReactNode }) => {
  const initialized = useAppSelector((state) => state.config.initialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.config.initialize(true));
  });

  if (!initialized) return <Initializing />;

  return (<>
    <GlobalStyles />
    <Header />
      <div className="layout">
        {children}
      </div>
    <Footer />
  </>);
}

export default Layout;