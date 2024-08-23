import FooterBottom from "./Footerbottom";
import { Layout, Flex, Col, message, ListProps, Image } from "antd";
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
                  description: "Sketch 工具集",
                },
                {
                  title: "Subscriptions",
                  url: "https://kitchen.alipay.com/",
                  description: "Sketch 工具集",
                },
                {
                  title: "Log Out",
                  url: "https://kitchen.alipay.com/",
                  description: "Sketch 工具集",
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
                  description: "Sketch 工具集",
                },
                {
                  title: "FAQs",
                  url: "https://kitchen.alipay.com/",
                  description: "Sketch 工具集",
                },
                {
                  title: "Blogs",
                  url: "https://kitchen.alipay.com/",
                  description: "Sketch 工具集",
                },
                {
                  title: "Latest Posts",
                  url: "https://kitchen.alipay.com/",
                  description: "Sketch 工具集",
                },
                {
                  title: "Product Reviews",
                  url: "https://kitchen.alipay.com/",
                  description: "Sketch 工具集",
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
                  description: "Sketch 工具集",
                },
                {
                  title: "Subscribe & Save",
                  url: "https://kitchen.alipay.com/",
                  description: "Sketch 工具集",
                },
                {
                  title: "Shop Now",
                  url: "https://kitchen.alipay.com/",
                  description: "Sketch 工具集",
                },
                {
                  title: "Terms and Conditions",
                  url: "https://kitchen.alipay.com/",
                  description: "Sketch 工具集",
                },
                {
                  title: "Site Map",
                  url: "https://kitchen.alipay.com/",
                  description: "Sketch 工具集",
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
                  icon: (
                    <Image
                      src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                      alt="yuque"
                      width={16}
                      height={16}
                    />
                  ),
                  title: "Address",
                  url: "https://yuque.com",
                  description: "Panchkula Haryana India",
                  openExternal: true,
                },
                {
                  icon: (
                    <Image
                      src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                      alt="yuque"
                      width={16}
                      height={16}
                    />
                  ),
                  title: "Phone Support",
                  url: "https://yunfengdie.com",
                  description:
                    "Call us at (123) 456-7890 during business hours",
                  openExternal: true,
                },
                {
                  icon: (
                    <Image
                      src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                      alt="yuque"
                      width={16}
                      height={16}
                    />
                  ),
                  title: "Sales",
                  url: "https://yunfengdie.com",
                  description: "sales@sales.com",
                  openExternal: true,
                },
                {
                  icon: (
                    <Image
                      src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                      alt="yuque"
                      width={16}
                      height={16}
                    />
                  ),
                  title: "Support",
                  url: "https://yunfengdie.com",
                  description: "sales@sales.com",
                  openExternal: true,
                },
                {
                  icon: (
                    <Image
                      src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                      alt="yuque"
                      width={16}
                      height={16}
                    />
                  ),
                  title: "Live Chat",
                  url: "https://yunfengdie.com",
                  description:
                    "Chat with us during business hours or call us at (123) 456-7890",
                  openExternal: true,
                },
              ],
            },
          ]}
          bottom="Made with ❤️ by NeonLights 4 You ❤️ "
        />
      </FooterWrapper>

      <FooterBottom />
    </>
  );
};

export default index;
