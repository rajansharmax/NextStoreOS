import FooterBottom from "./Footerbottom";
import { Layout, Flex, Col, message } from "antd";
import { FooterWrapper, StyledList, StyledRow } from "./styled";
import { Avatar, List, Button, Input, Form, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const index = () => {

  const data = [
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
            <h4>Subscribe to our newsletter</h4>
            <p>Get all the latest information on events, sales and offers.</p>
            <Form layout="inline" onFinish={onFinish}>
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
            </Form>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <h4>About</h4>
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
            <h4>About</h4>
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
            <h4>Contact Us</h4>
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
