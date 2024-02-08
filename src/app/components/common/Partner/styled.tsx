import styled from "styled-components";

export const PartnerWrapper = styled.div`

`;

export const Section = styled.div`

`

export const Container = styled.div`

`

export const PartnerContent = styled.div`
  margin-top: 57px;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;

      li {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        height: 150px;

        &:nth-of-type(2),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(7) {
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: transparent;
        }
      }
    }
  @media only screen and (max-width: 991px) {
      ul {
        li {
          img {
            width: 70%;
          }
        }
      }
  }
  @media only screen and (max-width: 767px) {
      ul {
        li {
          height: 100px;
        }
      }
  }
  @media only screen and (max-width: 480px) {
      ul {
        li {
          width: 50%;

          &:nth-of-type(2),
          &:nth-child(4),
          &:nth-child(5),
          &:nth-child(7) {
            border: none;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
          }
          &:nth-of-type(2),
          &:nth-child(3),
          &:nth-child(6),
          &:nth-child(7) {
            border: 1px solid rgba(255, 255, 255, 0.05);
            background: transparent;
          }
        }
      }

  }
`;