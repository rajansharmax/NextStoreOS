import styled from "styled-components";
import footerBG from "@/assets/images/bg/footer_bg3.jpg";

export const FooterStyleWrapper = styled.footer`
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  p {
    margin-bottom: 0;
  }
  /* footer top  */
  .top-footer-content {
    padding-bottom: 90px;
    padding-top: 150px;
    background: url(${footerBG.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;

    .footer_image {
      padding-right: 55px;
      p {
        margin-top: 45px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
      }
    }

    .footer-menu {
      .menu-title {
        color: #fff;
        margin-bottom: 45px;
      }
      ul {
        margin: 0;
        padding: 0;

        li {
          line-height: 45px;
          a {
            color: rgba(255, 255, 255, 0.7);
            transition: 0.4s;
          }
        }
      }
    }

    .footer_newsletter {
      .form-box {
        position: relative;
      }
      input,
      button {
        height: 60px;
        &:focus {
          outline: none;
        }
      }
      input {
        width: 100%;
        background: transparent;
        border: 2px solid #343d40;
        color: rgba(255, 255, 255, 0.7);

        line-height: 60px;
        padding: 0 20px;
      }

      button {
        height: 100%;
        width: 70px;
        position: absolute;
        right: 0;
        background: #00ffa3;
        border: none;
        transition: all 0.3s;

        &:hover {
          background-color: #00eb96;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .top-footer-content {
      .footer_image {
        margin-bottom: 40px;
        p {
          margin-top: 30px;
        }
      }

      .footer-menu {
        .menu-title {
          margin-bottom: 32px;
        }
      }
    }
  }
  @media only screen and (max-width: 667px) {
    .top-footer-content {
      .footer-menu {
        .menu-title {
          margin-bottom: 32px;
        }
      }

      .footer_newsletter {
        margin-top: 30px;
        padding-right: 50px;
      }
    }
  }
  @media only screen and (max-width: 540px) {
    .top-footer-content {
      .link-widgets {
        width: 50%;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .top-footer-content {
      .footer_newsletter {
        padding-right: 0;
      }
    }
  }
`;

export const FooterWrapper = styled.div`
  background: url(${footerBG.src});
  padding: 90px 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  footer {
    padding: 0 !important;
    margin: 0;
    background: transparent !important;
    .container {
      image {
        padding-right: 55px;
        p {
          margin-top: 45px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
        }
      }
      a {
        display: block;
        text-decoration: none;
        color: inherit;
      }
      p {
        margin-bottom: 0;
        margin-right: 10px !important;
      }

      .ant-space {
        .ant-space-item {
          &:first-child {
            h5 {
              color: #fff;
            }
          }
          &:last-child {
            ul {
              margin: 0;
              padding: 0;
              li {
                a {
                  color: rgba(255, 255, 255, 0.7);
                  transition: 0.4s;
                }
              }
            }
          }
          .ant-list-item {
            padding: 10px 0 !important;
          }
        }
      }
    }
  }
  .newsletter {
    .ant-form {
      position: relative;
    }
    input,
    button {
      height: 60px;
      &:focus {
        outline: none;
      }
    }
    h5 {
      color: #fff;
      margin-bottom: 45px;
    }
    input {
      width: 100%;
      background: transparent;
      border: 2px solid #343d40;
      color: rgba(255, 255, 255, 0.7);

      /* line-height: 60px; */
      padding: 0 20px;
    }

    button {
      width: 70px;
      position: absolute;
      right: 0;
      background: #00ffa3;
      border: none;
      transition: all 0.3s;

      &:hover {
        background-color: #00eb96;
      }
    }
  }
`;
