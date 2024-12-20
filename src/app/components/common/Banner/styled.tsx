import styled from "styled-components";
import breadcumdBg from "@/assets/images/bg/breadcumb-bg.jpg";
import Image from "next/image";

export const StyledImage = styled(Image)`

`;

export const BannerWrapper = styled.div`
  background: url(${breadcumdBg.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;

  .breadcrumb_form {
    display: flex;
    align-items: center;
    justify-content: end;

    form {
      position: relative;

      input,
      button {
        background: transparent;
      }

      input {
        width: 380px;
        padding: 11px 50px 11px 20px;
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.3);

        &:focus {
          outline: none;
        }
      }

      button {
        height: 100%;
        width: 50px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 50%;
        right: 0;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.7);
        transform: translate(0, -50%);
        border: none;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 80px 0;
    .breadcrumb_form {
      justify-content: start;
      margin-top: 40px;

      form {
        width: 100%;
        input {
          width: 100%;
        }
      }
    }
  }
`;

export const BreadcrumbArea = styled.div`

    font-family: "Bakbak One";

    .breadcrumb_menu {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      font-size: 18px;
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        &:hover {
          color: #ffffff;
        }
      }
      span {
        color: rgba(255, 255, 255, 0.7);
        margin: 0 10px;
      }
      img {
        margin-left: 15px;
      }
      .about {
        color: #00ffa3;
        font-size: 18px;
        text-transform: uppercase;
        font-family: "Bakbak One";
        &:hover{
          color: #00ffa3;
        }
      }
    }

    .breadcrumb_title {
      color: white;
      margin: 15px 0 0;
    }
`;