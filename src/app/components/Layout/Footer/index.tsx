import { FooterWrapper } from "./styled";
import { Container, Image } from "react-bootstrap";
import image from "@/assets/logoipsum.svg";
import ArrowIcon from "@/assets/images/blog/arrow-icon.png";
import FooterLinks from "@/assets/data/footer/FooterLinks";
import FooterBottom from "./Footerbottom";
import { Button, Col, Form, Input, List, Row, Space } from "antd";

const Footer = () => {
  return (
    <>
      {/* <FooterStyleWrapper>
        <div className="top-footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer_image">
                  <a href="# ">
                    <Image src={image.src} alt="bithu nft footer logo" />
                  </a>
                  <p>
                    Bithu is great solution for launch your NFT for minting. It
                    uses a dictionary over 200 Latin words, combined with a
                    handful.
                  </p>
                </div>
              </div>

              {FooterLinks?.map((menu, i) => (
                <div
                  key={i}
                  className=" col-sm-6 col-md-3 col-lg-2 link-widgets"
                >
                  <div className="footer-menu">
                    <h5 className="menu-title">{menu.widgetName}</h5>
                    <ul className="menu-list">
                      {menu.items?.map((item, i) => (
                        <li key={i}>
                          <a href={item.url}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="col-md-6 col-lg-4">
                <div className="footer-menu footer_newsletter">
                  <h5 className="menu-title">Subscribe Newsletter</h5>
                  <div className="form-box">
                    <input
                      type="text"
                      name="text"
                      placeholder="Email address"
                      required
                    />
                    <button>
                      <Image src={ArrowIcon.src} alt="bithu nft arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </FooterStyleWrapper> */}

      <FooterWrapper>
        <Container>
          <Row>
            <Col md={8} lg={8}>
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
              <Col key={i} sm={12} md={6} lg={4}>
                <Space direction="vertical" align="center">
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
            <Col md={12} lg={8}>
              <Space direction="vertical" align="center">
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
              </Space>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
      <FooterBottom />
    </>
  );
};

export default Footer;
