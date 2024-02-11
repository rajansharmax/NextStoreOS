import Image from "next/image";
import titleShape from "@/assets/images/icon/home-shape.png";
import { PageHeaderWrapper } from "./styled";
import { Container } from "react-bootstrap";
import { Content } from "antd/es/layout/layout";
import { Col, Breadcrumb } from "antd";
import Link from "next/link";
import routes from "@/config/routes";

const PageHeader = () => {
  return (
    <PageHeaderWrapper>
      <Container>
        <Content>
          <Col md={5}>
            <Breadcrumb separator="."
              items={[
                {
                  title: 'Home',
                  href: routes.home,
                },
                {
                  title: 'Contact',
                  href: routes.contact,
                }
              ]}
            />
            <h2>Contact US</h2>
          </Col>
        </Content>
      </Container>
    </PageHeaderWrapper>
  );
};

export default PageHeader;
