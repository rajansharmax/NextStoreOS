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
                  url: "https://pro.ant.design/",
                  openExternal: true,
                },
                {
                  title: "Orders",
                  url: "https://mobile.ant.design/",
                  openExternal: true,
                },
                {
                  title: "Wishlist",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
                {
                  title: "Subscriptions",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
                {
                  title: "Log Out",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
              ],
            },
            {
              title: "Customer Links",
              items: [
                {
                  title: "Help Center",
                  url: "https://pro.ant.design/",
                  openExternal: true,
                },
                {
                  title: "Returns & Exchanges",
                  url: "https://mobile.ant.design/",
                  openExternal: true,
                },
                {
                  title: "Shipping Information",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
                {
                  title: "FAQs",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
                {
                  title: "Blogs",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
                {
                  title: "Latest Posts",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
                {
                  title: "Product Reviews",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
              ],
            },
            {
              title: "Company Information",
              items: [
                {
                  title: "About Us",
                  url: "https://pro.ant.design/",
                  openExternal: true,
                },
                {
                  title: "Return Policy",
                  url: "https://mobile.ant.design/",
                  openExternal: true,
                },
                {
                  title: "Privacy Policy",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
                {
                  title: "Subscribe & Save",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
                {
                  title: "Shop Now",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
                {
                  title: "Terms and Conditions",
                  url: "https://kitchen.alipay.com/",
                  description: "",
                },
                {
                  title: "Site Map",
                  url: "https://kitchen.alipay.com/",
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
