import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 113px;
  padding-bottom: 85px;
`;

export const Section = styled.div`

`

export const Container = styled.div`
 position: relative;
`

export const SectionContent = styled.div`
   position: relative;
      z-index: 1;

      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        li {
          width: 25%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          h4 {
            font-family: "Bakbak One";
            font-style: normal;
            font-weight: 400;
            font-size: 100px;
            line-height: 140px;
            text-transform: uppercase;
            color: transparent;

            &.green {
              -webkit-text-stroke: 1px rgba(0, 255, 163, 0.7);
            }
            &.blue {
              -webkit-text-stroke: 1px rgba(88, 101, 242, 0.7);
            }
            &.yellow {
              -webkit-text-stroke: 1px rgba(255, 230, 0, 0.7);
            }
            &.red {
              -webkit-text-stroke: 1px rgba(255, 0, 76, 0.7);
            }
          }

          p {
            font-family: "Bakbak One";
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 40px;
            color: #ffffff;
            max-width: 148px;
            width: 100%;
            margin-left: 35px;
            margin-bottom: 0;
          }
        }
      }
`;