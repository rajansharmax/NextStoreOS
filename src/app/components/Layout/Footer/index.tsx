import { FooterWrapper } from "./styled";
import { Container, Image } from "react-bootstrap";
import image from "@/assets/logoipsum.svg";
import ArrowIcon from "@/assets/images/blog/arrow-icon.png";
import FooterLinks from "@/assets/data/footer/FooterLinks";
import FooterBottom from "./Footerbottom";
import { Button, Col, Form, Input, List, Row, Space } from "antd";
import { Layout, Flex } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const index = () => {
  return (
    <>
      <FooterWrapper>
        <Footer>
          <Container>
            <Row>
              <Col lg={8}>
                <Space direction="vertical">
                  <a href="#">
                    <Image src={image.src} alt="footer logo" />
                  </a>
                  <p>
                    Bithu is great solution for launch your NFT for minting. It
                    uses a dictionary over 200 Latin words, combined with a
                    handful.
                  </p>
                </Space>
              </Col>
              {FooterLinks?.map((menu, i) => (
                <Col key={i} xs={12} sm={12} md={6} lg={4}>
                  <Space direction="vertical">
                    <h5>{menu.widgetName}</h5>
                    <List
                      itemLayout="vertical"
                      dataSource={menu.items}
                      renderItem={(item, index) => (
                        <List.Item key={index} style={{ padding: "10px" }}>
                          <a href={item.url}>{item.title}</a>
                        </List.Item>
                      )}
                    />
                  </Space>
                </Col>
              ))}
              <Col className="newsletter" xs={24} sm={24} md={12} lg={8}>
                {/* <Space direction="vertical" align="center">
                  <h5>Subscribe Newsletter</h5>
                  <Form layout="vertical">
                    <Form.Item label="Email Addres">
                      <Input
                        type="text"
                        name="text"
                        placeholder="Email address"
                        required
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button>Submit Now</Button>
                    </Form.Item>
                  </Form>
                </Space> */}
                <div className="footer-menu">
                  <h5 className="menu-title">Subscribe Newsletter</h5>
                  <div className="form-box">
                    <input
                      type="text"
                      name="text"
                      placeholder="Email address"
                      required
                    />
                    <button>
                      <Image src={ArrowIcon.src} alt="logo" />
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Footer>
      </FooterWrapper>
      <FooterBottom />
    </>
  );
};

export default index;
