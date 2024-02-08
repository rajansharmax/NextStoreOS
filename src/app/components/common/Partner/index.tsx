import PartnerData from "@/assets/data/Home/PartnerData";
import { Container, PartnerContent, PartnerWrapper, Section } from "./styled"
import TitleSection from "@/app/components/common/TitleSection";
import Image from "next/image";


const Partner = () => {
  return (<>
    <PartnerWrapper>
      <Section>
        <Container className="container">
          <TitleSection
            isCenter={true}
            subtitle="Trusted by"
            title="Our Partners"
            className="text-center"
          />
          <PartnerContent>
            <ul>
              {PartnerData.map((item, i) => (
                <li key={i}>
                  <a href="#">
                    <Image src={item} alt="NeonLights partner" />
                  </a>
                </li>
              ))}
            </ul>
          </PartnerContent>
        </Container>
      </Section>
    </PartnerWrapper>
  </>);
}

export default Partner;