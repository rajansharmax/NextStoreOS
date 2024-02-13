"use client";
import { useEffect } from "react";
import PageHeader from "../components/common/PageHeader";
import { useAppSelector } from "@/lib/hook";
import { Container } from "react-bootstrap";
import {
  ContactUsWrapper,
  AddressInfo,
  ContactInfo,
  ContactUSForm,
  ContactUsInfo,
  TagSection,
} from "./styled";
import { Col, Form, Input, Row } from "antd";
import Button from "../components/common/Button";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import phoneIcon from "@/assets/images/icon/call-outgoing.svg";
import msgIcon from "@/assets/images/icon/sms-notification.svg";
import routes from "@/config/routes";

const AboutUs = () => {
  const config = useAppSelector((state) => state.config);

  useEffect(() => {
    console.log(config, "useeffect");
  });

  const handleSubmit = (e: any) => {
    console.log(e);
  };

  const items = [
    {
      title: "Home",
      href: routes.home,
    },
    {
      title: "Contact",
      href: routes.contact,
    },
  ];

  return (
    <>
      <PageHeader items={items} title="Contact Us" />
      <ContactUsWrapper>
        <Container>
          <TagSection>
            <h4>SAY HELLO !</h4>
            <h2>
              We’d pleased To <br />
              Hear From You{" "}
            </h2>
          </TagSection>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12}>
              <ContactUSForm>
                <Form onSubmitCapture={handleSubmit} layout="vertical">
                  <Form.Item label="YOUR Name *" htmlFor="name">
                    <Input
                      type="text"
                      placeholder="e.g.  Roe Smith"
                      name="name"
                      required={true}
                    />
                  </Form.Item>
                  <Form.Item label="Email Addres *" htmlFor="mail">
                    <Input
                      type="mail"
                      placeholder="e.g.  example@gmail.com"
                      name="mail"
                      required={true}
                    />
                  </Form.Item>
                  <Form.Item label="Phone Number *" htmlFor="phone">
                    <Input
                      type="text"
                      placeholder="e.g.  +55 365 256 2556"
                      name="phone"
                      required={true}
                    />
                  </Form.Item>
                  <Form.Item label="Message *" htmlFor="message">
                    <TextArea
                      name="message"
                      placeholder="Type your Message"
                      required={true}
                    />
                  </Form.Item>
                  <Button lg variant="mint">
                    Submit Now
                  </Button>
                </Form>
              </ContactUSForm>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <ContactUsInfo>
                <h4>Contact Info</h4>
                <AddressInfo>
                  <Image src={phoneIcon} alt="icon" />
                  <ContactInfo>
                    <h5>Call us</h5>
                    <p>Mobile: +91 9023232046</p>
                    <p>Hotline: 9023232046</p>
                  </ContactInfo>
                </AddressInfo>
                <AddressInfo>
                  <Image src={phoneIcon} alt="icon" />
                  <ContactInfo>
                    <h5>Mail us</h5>
                    <p>Info: rajansharmaa46@gmail.com</p>
                    <p>Support: rajansharmaa46@gmail.com</p>
                  </ContactInfo>
                </AddressInfo>
              </ContactUsInfo>
            </Col>
          </Row>
        </Container>
      </ContactUsWrapper>
    </>
  );
};

export default AboutUs;
