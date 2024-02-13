"use client"
import routes from "@/config/routes";
import PageHeader from "../components/common/PageHeader";
import { Container } from "react-bootstrap";
import { Col, Image, Row } from "antd";
import { AboutUSImages, AboutUsContent, AboutUsWrapper } from "./styled";
import Button from "../components/common/Button";
import thumb1 from "@/assets/images/nft/story-img1.png";
import thumb2 from "@/assets/images/nft/story-img2.png";
import thumb3 from "@/assets/images/nft/story-img3.png";
import thumb4 from "@/assets/images/nft/story-img4.png";


const AboutUs = () => {

  const items = [
    {
      title: "Home",
      href: routes.home,
    },
    {
      title: "About",
      href: routes.about,
    },
  ];

  return (
    <>
      <PageHeader items={items} title="About Us" />
      <AboutUsWrapper>
        <Container>
          <Row>
            <Col md={12}>
              <AboutUsContent>
                <h2>
                  THE STORY <br /> YOU SHOULD KNOW
                </h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur
                  cites of the word in classical literature.
                </p>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by
                  Cicero are also reproduced in their exact original a latin
                  professor.
                </p>
                <Button lg variant="mint">
                  Read Litepaper
                </Button>
              </AboutUsContent>
            </Col>
            <Col md={12}>
              <AboutUSImages>
                <Image src={thumb1.src} alt="" preview={false} />
                <Image src={thumb2.src} alt="" preview={false} />
                <Image src={thumb3.src} alt="" preview={false} />
                <Image src={thumb4.src} alt="" preview={false} />
              </AboutUSImages>
            </Col>
          </Row>
        </Container>
      </AboutUsWrapper>
    </>
  );
}

export default AboutUs;