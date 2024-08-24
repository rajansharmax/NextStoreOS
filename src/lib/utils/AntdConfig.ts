import { ThemeConfig } from "antd";
import { AliasToken } from "antd/es/theme/internal";

export const token: Partial<AliasToken> = {
  colorPrimary: "#25db4a",
  colorPrimaryActive: "#fff",
  colorBgContainer: "#171717",
  colorText: "#fff",
  colorIcon: "#fff",
  colorTextPlaceholder: "#25db4a",
  colorLink: "#25db4a",
  boxShadow: "0px 2px 0px 0px #25db4a",
  colorPrimaryTextActive: "#fff",
  colorLinkHover: "#25db4a",
  colorLinkActive: "#25db4a",
  colorPrimaryHover: "#25db4a",
  colorBorder: "#25db4a",
  colorBorderSecondary: "#25db4a",
  colorBgTextHover: "#25db4a",
  colorBgTextActive: "#25db4a",
  colorBgElevated: "#171717",
} as const;
