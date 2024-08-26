import FooterBottom from "./Footerbottom";
import { Layout, Flex, Col, message, ListProps } from "antd";
import {
  FooterWrapper,
  StyledForm,
  StyledList,
  StyledRCFooter,
  StyledRow,
  Text,
  Title,
} from "./styled";
import { Avatar, List, Button, Input, Form, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import "rc-footer/assets/index.css";
import { Image } from "react-bootstrap";
import {
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import routes from "@/config/routes";

const index = () => {
  const onFinish = (values: any) => {
    message.success("Thanks for subscribing", 5);
  };

  const ExclusiveOffers = () => {
    return (
      <>
        <StyledForm layout="inline" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input type="text" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </StyledForm>
      </>
    );
  }

  return (
    <>
      <FooterWrapper>
        <StyledRCFooter
          maxColumnsPerRow={5}
          columns={[
            {
              title: "Join Our Newsletter Now",
              items: [
                {
                  title: (
                    <Text>
                      Be the first one to know about discounts, offers and
                      events. Unsubscribe whenever you like.
                    </Text>
                  ),
                  url: "#",
                  description: <ExclusiveOffers />,
                  openExternal: true,
                },
              ],
            },
            {
              title: "My Account",
              items: [
                {
                  title: "My Account",
                  url: "my-account",
                  openExternal: true,
                },
                {
                  title: "Orders",
                  url: "orders",
                  openExternal: true,
                },
                {
                  title: "Wishlist",
                  url: "wishlist",
                  description: "",
                },
                {
                  title: "Subscriptions",
                  url: "subscriptions",
                  description: "",
                },
                {
                  title: "Log Out",
                  url: "log-out",
                  description: "",
                },
              ],
            },
            {
              title: "Customer Links",
              items: [
                {
                  title: "Help Center",
                  url: "help-center",
                  openExternal: true,
                },
                {
                  title: "Returns & Exchanges",
                  url: "returns-exchanges",
                  openExternal: true,
                },
                {
                  title: "Shipping Information",
                  url: "shipping-information",
                  description: "",
                },
                {
                  title: "FAQs",
                  url: "faqs",
                  description: "",
                },
                {
                  title: "Blogs",
                  url: "blogs",
                  description: "",
                },
                {
                  title: "Latest Posts",
                  url: "latest-posts",
                  description: "",
                },
                {
                  title: "Product Reviews",
                  url: "product-reviews",
                  description: "",
                },
              ],
            },
            {
              title: "Company Information",
              items: [
                {
                  title: "About Us",
                  url: "about-us",
                  openExternal: true,
                },
                {
                  title: "Return Policy",
                  url: "return-policy",
                  openExternal: true,
                },
                {
                  title: "Privacy Policy",
                  url: "privacy-policy",
                  description: "",
                },
                {
                  title: "Subscribe & Save",
                  url: "subscribe-save",
                  description: "",
                },
                {
                  title: "Shop Now",
                  url: "shop-now",
                  description: "",
                },
                {
                  title: "Terms and Conditions",
                  url: "terms-and-conditions",
                  description: "",
                },
                {
                  title: "Site Map",
                  url: "site-map",
                  description: "",
                },
              ],
            },
            {
              icon: (
                <Image
                  src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                  alt="more products"
                  width={16}
                  height={16}
                />
              ),
              title: "Contact Information",
              items: [
                {
                  icon: <HomeOutlined />,
                  title: "Address",
                  url: "https://maps.app.goo.gl/DdAdjWJcxvVfZh7o9",
                  description: "Panchkula Haryana India",
                  openExternal: true,
                },
                {
                  icon: <PhoneOutlined />,
                  title: "Phone Support",
                  url: "tel:9023232046",
                  description: "Call us at 9023232046 during business hours",
                  openExternal: true,
                },
                {
                  icon: <PhoneOutlined />,
                  title: "Sales",
                  url: "mailto:rajansharmaa46@gmail.com",
                  description: "rajansharmaa46@gmail.com",
                  openExternal: true,
                },
                {
                  icon: <MailOutlined />,
                  title: "Support",
                  url: "mailto:rajansharmaa46@gmail.com",
                  description: "rajansharmaa46@gmail.com",
                  openExternal: true,
                },
                {
                  icon: <WechatWorkOutlined />,
                  title: "Live Chat",
                  url: "",
                  description:
                    "Chat with us during business hours or call us at (123) 456-7890",
                  openExternal: true,
                },
              ],
            },
          ]}
          bottom="2024 NeonLights | All Rights Reserved | Made with ❤️ by NeonLights 4 You"
        />
      </FooterWrapper>
    </>
  );
};

export default index;
