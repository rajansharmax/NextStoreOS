import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  padding: 85px 0 140px;
`;

export const TagSection = styled.div`
  h4 {
    color: #00ffa3;
    margin-bottom: 13px;
    text-transform: uppercase;
  }
  h2 {
    font-size: 48px;
    line-height: 67px;
    color: #ffffff;
    margin-bottom: 37px;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 991px) {
    h4 {
      font-size: 22px;
    }
    h2 {
      font-size: 38px;
      line-height: 50px;
    }
  }

  @media only screen and (max-width: 767px) {
    h4 {
      font-size: 20px;
    }
    h2 {
      font-size: 34px;
      line-height: 45px;
    }
  }
`;

export const ContactUSForm = styled.div`
  form {
    .form_box + .form_box {
      margin-top: 22px;
    }
  }
  label {
    font-family: "Bakbak One" !important;
    text-transform: uppercase !important;
    color: rgba(255, 255, 255, 0.8) !important;
    line-height: 45px !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    margin-bottom: 5px !important;
  }

  input,
  textarea {
    border: 2px solid rgba(255, 255, 255, 0.1) !important;
    background: transparent !important;
    outline: none !important;
    padding: 8px 21px !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    color: #ffffff !important;
    width: 100% !important;
    box-sizing: border-box !important;
    &::placeholder {
      color: #ffffff !important;
    }
  }

  input {
    height: 60px !important;
  }

  textarea {
    height: 130px;
    resize: none;
  }
`;

export const ContactUsInfo = styled.div`
  padding-top: 40px;
  padding-left: 110px;
  h4 {
    margin-bottom: 25px;
    text-transform: uppercase;
  }
  h4,
  h5 {
    color: #ffffff;
    text-transform: uppercase;
  }
  h5 {
    font-size: 18px;
    margin-bottom: 6px;
  }

  p {
    font-size: 16px;
    line-height: 40px;
    font-weight: 400;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 991px) {
    padding-left: 40px;

    p {
      font-size: 14px;
      line-height: 30px;
    }
  }

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
  }
`;

export const AddressInfo = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 15px;
`;

export const ContactInfo = styled.div`
  margin-top: 15px;
`;
