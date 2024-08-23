import styled from "styled-components";

export const FooterBottomStyleWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  @media only screen and (max-width: 991px) {
    backdrop-filter: none;
  }
`;

export const FooterBottomContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 991px) {
    flex-direction: column-reverse;
    row-gap: 20px;
    padding: 50px 10px;
  }
`;

export const FooterShape = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  ${({ position }) => (position === "left" ? "left: 0px;" : "right: 0px;")}
  top: 0px;
  height: 100%;
  z-index: 0;

  img {
    height: 100%;
  }
`;

export const BottomFooterLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;

export const CopyrightText = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;

  @media only screen and (max-width: 991px) {
    text-align: center;
  }
`;

export const BackToTopButton = styled.a`
  display: flex;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export const BottomFooterRight = styled.div`
  max-width: 394px;
  width: 100%;
`;

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 0 auto;
  padding: 0;

  li {
    &:hover {
      a {
        color: #ffffff;

        img {
          opacity: 1;
        }
      }
    }
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    text-align: right;
    transition: 0.4s;
    text-decoration: none;

    img {
      width: 20px;
      opacity: 0.7;
    }
  }
`;

export const TopFooterContent = styled.div`
  padding: 50px 0px;

  @media only screen and (max-width: 991px) {
    padding: 50px 0px;
    display: flex;
    flex-direction: column-reverse;
    row-gap: 20px;
  }
`;
