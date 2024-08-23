import FooterBottom from "./Footerbottom";
import { Layout, Flex, Col, message, ListProps } from "antd";
import { FooterWrapper, StyledForm, StyledList, StyledRow } from "./styled";
import { Avatar, List, Button, Input, Form, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;

interface ListItemProps {
  title: string;
  link?: string;
  icon?: string;
}

interface Item {
  title: string;
}

const index = () => {

  const data: ListItemProps[] = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  const onFinish = (values: any) => {
      message.success('Thanks for subscribing', 5);
  };

  return (
    <>
      <FooterWrapper>
        <StyledRow>
          <Col xs={12} sm={12} md={8} lg={6} xl={6}>
            <h4>Join Our Newsletter Now</h4>
            <p>
              Be the first one to know about discounts, offers and events.
              Unsubscribe whenever you like.
            </p>
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
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <h4>My Account</h4>
            <StyledList
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item: any, index: number) => (
                <List.Item key={index}>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <h4>Company</h4>
            <StyledList
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item: any, index: number) => (
                <List.Item key={index}>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <h4>Customers</h4>
            <StyledList
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item: any, index: number) => (
                <List.Item key={index}>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <h4>Contact Information</h4>
            <StyledList
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item: any, index: number) => (
                <List.Item key={index}>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
                  />
                </List.Item>
              )}
            />
          </Col>
        </StyledRow>
      </FooterWrapper>
      <FooterBottom />
    </>
  );
};

export default index;
