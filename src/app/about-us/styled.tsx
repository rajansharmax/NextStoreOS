import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  padding: 107px 0 0;
  h2 {
    font-size: 48px;
    color: #ffffff;
    line-height: 67px;
    margin-bottom: 43px;
    text-transform: uppercase;
    @media only screen and (max-width: 1199px) {
      font-size: 38px;
      line-height: 53px;
      margin-bottom: 17px;
    }

    @media only screen and (max-width: 991px) {
      font-size: 34px;
      line-height: 40px;
      margin-bottom: 17px;
    }
  }
`;

export const AboutUsContent = styled.div`
  padding-right: 20px;
  p {
    margin-bottom: 25px;
  }

  button {
    margin-top: 45px;
  }
  @media only screen and (max-width: 1199px) {
    p {
      font-size: 14px;
      line-height: 26px;
    }
  }

  @media only screen and (max-width: 991px) {
    p {
      font-size: 12px;
      line-height: 22px;
      margin-bottom: 10px;
    }
  }
`;

export const AboutUSImages = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  .ant-image {
    img {
      width: 100% !important;
    }
  }

  @media only screen and (max-width: 1199px) {
    .ant-image {
      width: 47%;
    }
  }
  @media only screen and (max-width: 767px) {
    margin-top: 50px;
  }
`;
