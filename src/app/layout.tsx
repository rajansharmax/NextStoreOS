import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Head from "@/app/components/Layout/Partials/Head";
import { inter } from "@/config/Fonts";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "bootstrap/dist/css/bootstrap.css";
import { ConfigProvider } from "antd";
import { token } from "@/lib/utils/AntdConfig";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Neon Lights",
  description: "Neon Lights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <Head />
        <body className={inter.className}>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                token: token,
              }}
            >
              <NextTopLoader
                color="#25db4a"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={100}
                shadow="0 0 10px #25db4a,0 0 5px #25db4a"
              />
              {children}
            </ConfigProvider>
          </AntdRegistry>
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </StoreProvider>
  );
}
