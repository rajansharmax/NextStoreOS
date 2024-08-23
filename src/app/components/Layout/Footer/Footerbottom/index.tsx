import React from "react";
import Image from "next/image";
import SocialLinks from "@/assets/data/footer/SocialLinks";
import backToTopIcon from "@/assets/images/icon/back_to_top.svg";
import footerShapesLeft from "@/assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "@/assets/images/icon/footer_shapes_right.png";
import {
  FooterBottomStyleWrapper,
  FooterBottomContent,
  FooterShape,
  BottomFooterLeft,
  CopyrightText,
  BackToTopButton,
  BottomFooterRight,
  SocialList
} from "./styled";

const FooterBottom = () => {
  return (
    <FooterBottomStyleWrapper>
      <FooterShape position="left">
        <Image src={footerShapesLeft} alt="Footer Shapes Left" />
      </FooterShape>
      <FooterShape position="right">
        <Image src={footerShapesRight} alt="Footer Shapes Right" />
      </FooterShape>
      <FooterBottomContent>
        <BottomFooterLeft>
          <CopyrightText>
            Copyright ©{new Date().getFullYear()} NeonLights, All rights reserved.
          </CopyrightText>
        </BottomFooterLeft>
        <BackToTopButton href="#">
          <Image src={backToTopIcon} alt="Back to Top" />
        </BackToTopButton>
        <BottomFooterRight>
          <SocialList>
            {SocialLinks.map((item, i) => (
              <li key={i}>
                <a href={item.url}>
                  {item.thumb ? (
                    <Image src={item.thumb} alt="Social Icon" />
                  ) : (
                    item.icon
                  )}
                </a>
              </li>
            ))}
          </SocialList>
        </BottomFooterRight>
      </FooterBottomContent>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;
